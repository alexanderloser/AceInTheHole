using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;
using AceInTheHole.Models;
using System.Net;
using System.Threading.Tasks;

namespace AceInTheHole.Models
{
    // Класс для работы с почтой
    public class Email
    {
        private static string MailSender = "neket007wow@gmail.com";

        private static string MailRecipient = "alexanderloser@gmail.com";

        // Отправка сообщения на почту
        public static async Task Send(Request request)
        {
            var body = "<p>Саня, на нашем сайте заявка от человека с именем, {0} {1}!</p><pЕму можно позвонить по номеру:{2}<br>Его почта: {3}</p>";
            var message = new MailMessage();
            message.To.Add(new MailAddress(MailRecipient));  // replace with valid value 
            message.From = new MailAddress(MailSender);  // replace with valid value
            message.Subject = "Вы оставили заявку на нашем сайте";
            message.Body = string.Format(body, request.FirstName, request.LastName, request.PhoneNumber, request.MiddleName);

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
                await smtp.SendMailAsync(message);
                message.Dispose();
            }
        }
    }
}