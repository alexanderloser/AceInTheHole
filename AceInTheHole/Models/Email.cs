using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;
using AceInTheHole.Models;
using System.Net;

namespace AceInTheHole.Models
{
    // Класс для работы с почтой
    public class Email
    {
        private static string MailSender = "neket007wow@gmail.com";

        private static string MailRecipient = "alexanderloser@gmail.com";

        // Отправка сообщения на почту
        public static void Send(Request request)
        {
            var body = "<p>Здравствуйте, {0} {1}!</p><p>Мы скоро перезвоним вам по номеру:{2}</p>";
            var message = new MailMessage();
            message.To.Add(new MailAddress(MailRecipient));  // replace with valid value 
            message.From = new MailAddress(MailSender);  // replace with valid value
            message.Subject = "Вы оставили заявку на нашем сайте";
            message.Body = string.Format(body, request.FirstName, request.LastName, request.PhoneNumber);

            message.IsBodyHtml = true;

            using (var smtp = new SmtpClient())
            {
                var credential = new NetworkCredential
                {
                    UserName = MailSender,  // replace with valid value
                    Password = "SmolinaBreakBeat12357895"  // replace with valid value
                };

                smtp.Credentials = credential;
                smtp.Host = "smtp.gmail.com";
                smtp.Port = 587;
                smtp.EnableSsl = true;
                smtp.Send(message);
            }
        }
    }
}