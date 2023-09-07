import { TG } from "@/shared/env";

export const sendWithTg = async (formData) => {
  const message = `Name: ${formData.name}
  %0AEmail: ${formData.email}
  %0APhone: ${formData.phone}
  %0AMessage: ${formData.message}`;
  return fetch(
    `https://api.telegram.org/bot${TG.BOT_TOKEN}/sendMessage?chat_id=${TG.CHAT_ID}&text=${message}`,
    { method: "POST" }
  );
};