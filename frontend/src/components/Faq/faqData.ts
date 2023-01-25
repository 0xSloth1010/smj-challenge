export const faqData = [
  {
    question: 'How might you track link opens?',
    answer:
      'To track link opens, we can add a field to the shortened URL document in the database that increments every time the link is opened. Additionally, we can use a package like "morgan" to log requests to the server and track opens that way.'
  },
  {
    question:
      'We will likely be used by spammers. How might you prevent the use of our link shortener for spam?',
    answer:
      'To prevent the use of the link shortener for spam, you can implement a rate limiting system that limits the number of links that can be created by a single IP address within a certain time frame. Additionally, you can implement a captcha system to verify that the person creating the link is not a bot.'
  },
  {
    question: 'How might you create authenticated or password-protected links?',
    answer:
      'To create authenticated or password-protected links, we can add a field to the shortened URL document in the database for a password and check for this password before redirecting to the original URL. Alternatively, we can use JSON Web Tokens (JWT) to authenticate the user and attach the token to the shortened URL, then check for the token before redirecting to the original URL.'
  }
]
