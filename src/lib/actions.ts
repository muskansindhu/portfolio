"use server";

import { z } from "zod";
import { ContactFormSchema } from "./schemas";

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.error) {
    return { error: result.error.format() };
  }

  try {
    const { name, message } = result.data;

    // Create mailto URL with pre-filled content
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(message);
    const mailtoUrl = `mailto:shunyamuskan@gmail.com?subject=${subject}&body=${body}`;

    return {
      success: true,
      mailtoUrl,
      data: result.data
    };
  } catch (error) {
    return { error };
  }
}
