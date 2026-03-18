"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
};

type Stroke = {
  id: number;
  points: Point[];
  color: string;
  width: number;
  createdAt: number;
};

const STROKE_LIFETIME = 6000;
const BRUSH_COLOR = "#2f7df4";
const BRUSH_WIDTH = 4;

export default function DrawBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const strokesRef = useRef<Stroke[]>([]);
  const currentStrokeRef = useRef<Stroke | null>(null);
  const rafRef = useRef<number | null>(null);
  const strokeIdRef = useRef(0);
  const isDrawingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const surface = document.querySelector("[data-draw-surface]") as HTMLElement | null;
    const content = document.querySelector("[data-app-content]") as HTMLElement | null;

    if (!canvas || !surface || !content) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSelectionLock = (locked: boolean) => {
      const value = locked ? "none" : "";

      document.body.style.userSelect = value;
      (document.body.style as CSSStyleDeclaration).webkitUserSelect = value;
      (document.body.style as CSSStyleDeclaration).webkitTouchCallout = locked ? "none" : "";

      content.style.userSelect = value;
      (content.style as CSSStyleDeclaration).webkitUserSelect = value;

      const images = content.querySelectorAll("img");
      images.forEach((img) => {
        const el = img as HTMLImageElement;
        el.draggable = !locked;
        el.style.userSelect = value;
        (el.style as CSSStyleDeclaration).webkitUserDrag = locked ? "none" : "";
      });
    };

    const resizeCanvas = () => {
      const rect = surface.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
    };

    const getPoint = (e: PointerEvent): Point => {
      const rect = surface.getBoundingClientRect();

      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const isInsideContent = (target: EventTarget | null) => {
      return target instanceof HTMLElement && !!target.closest("[data-app-content]");
    };

    const drawStroke = (stroke: Stroke, alpha = 1) => {
      if (stroke.points.length < 2) return;

      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.width;
      ctx.globalAlpha = alpha;

      ctx.moveTo(stroke.points[0].x, stroke.points[0].y);

      for (let i = 1; i < stroke.points.length; i++) {
        const point = stroke.points[i];
        ctx.lineTo(point.x, point.y);
      }

      ctx.stroke();
      ctx.restore();
    };

    const render = () => {
      const rect = surface.getBoundingClientRect();
      const now = performance.now();

      ctx.clearRect(0, 0, rect.width, rect.height);

      strokesRef.current = strokesRef.current.filter((stroke) => {
        return now - stroke.createdAt < STROKE_LIFETIME;
      });

      for (const stroke of strokesRef.current) {
        const age = now - stroke.createdAt;
        const alpha = 1 - Math.min(age / STROKE_LIFETIME, 1);
        drawStroke(stroke, alpha);
      }

      if (currentStrokeRef.current) {
        drawStroke(currentStrokeRef.current, 1);
      }

      rafRef.current = requestAnimationFrame(render);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (isInsideContent(e.target)) return;
      if (e.button !== 0) return;

      isDrawingRef.current = true;
      setSelectionLock(true);

      const point = getPoint(e);

      currentStrokeRef.current = {
        id: ++strokeIdRef.current,
        points: [point],
        color: BRUSH_COLOR,
        width: BRUSH_WIDTH,
        createdAt: performance.now(),
      };

      e.preventDefault();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDrawingRef.current || !currentStrokeRef.current) return;

      const point = getPoint(e);
      currentStrokeRef.current.points.push(point);

      e.preventDefault();
    };

    const finishStroke = () => {
      if (!isDrawingRef.current) return;

      if (currentStrokeRef.current && currentStrokeRef.current.points.length > 1) {
        strokesRef.current.push(currentStrokeRef.current);
      }

      currentStrokeRef.current = null;
      isDrawingRef.current = false;
      setSelectionLock(false);
    };

    const preventSelection = (e: Event) => {
      if (isDrawingRef.current) {
        e.preventDefault();
      }
    };

    resizeCanvas();
    rafRef.current = requestAnimationFrame(render);

    window.addEventListener("resize", resizeCanvas);
    surface.addEventListener("pointerdown", onPointerDown, true);
    window.addEventListener("pointermove", onPointerMove, { passive: false });
    window.addEventListener("pointerup", finishStroke);
    window.addEventListener("pointercancel", finishStroke);

    document.addEventListener("selectstart", preventSelection);
    document.addEventListener("dragstart", preventSelection);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      surface.removeEventListener("pointerdown", onPointerDown, true);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", finishStroke);
      window.removeEventListener("pointercancel", finishStroke);

      document.removeEventListener("selectstart", preventSelection);
      document.removeEventListener("dragstart", preventSelection);

      setSelectionLock(false);

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
}