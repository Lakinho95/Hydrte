import smtplib,ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
username ='mirkocarxa@gmail.com'
password = 'qcmhfztovbsqeacy'


def send_mail(text='Email Body', subject = 'Search',from_email='Olexa <gg@memex.xyz>',  to_emails = None, html = None):
    assert isinstance(to_emails, list)
    msg = MIMEMultipart('alternative')
    msg['From'] = from_email
    msg['To'] = ', '.join(to_emails)
    msg['Subject'] = subject
    txt_part = MIMEText(text, 'plain')
    msg.attach(txt_part)
    if html != None:
        html_part = MIMEText('<h1> This is working </h1>', 'html')
        msg.attach(html_part)
    msg_str = msg.as_string()
    # login to my smtp server
    server = smtplib.SMTP(host='smtp.gmail.com', port= 587)
    server.ehlo()
    context = ssl.create_default_context()
    server.starttls(context=context)
    server.login(username,password) # bitno je da se razlikuju username i from_name
    server.sendmail(from_email,to_emails, msg_str)
    server.quit()


#send_mail(to_emails=['mirkocarxa@gmail.com'])
