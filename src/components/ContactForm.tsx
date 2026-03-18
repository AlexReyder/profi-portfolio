import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { SendEmail } from "./SendEmail";

const ContactForm = () => {
  return (
    <Card>
      <form
        action={async (FormData) => {
          "use server";
          await SendEmail(FormData);
        }}
      >
        <CardHeader>
          <CardTitle className="icon_underline">Отправить заявку</CardTitle>
          <CardDescription>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="name">Имя</Label>
            <Input
              type="text"
              name="name"
              required
              placeholder="Ваше имя"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="SenderEmail"
              required
              placeholder="Ваш Email"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="message">Сообщение</Label>
            <textarea
              placeholder="Сообщение"
              name="message"
              className=" resize-none flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            ></textarea>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Отправить
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
