import "./Contact.scss";

const contacts = [
  {
    title: "General Inquiries",
    description:
      "For any general inquiries or questions about FC THG08, we are here to assist you. Whether you want to learn more about the club's history, membership options, or upcoming events, our dedicated support team is just an email away.",
  },
  {
    title: "Membership Support",
    description:
      "Are you a proud member of FC THG08? Our Membership Support team is available to address any queries or concerns related to your membership experience. Whether you need assistance with renewals, benefits, or personalized club merchandise, we're here to provide the help you need.",
  },
  {
    title: "Media and Press Enquiries",
    description:
      "Members of the media and press can get in touch with FC THG08's media relations team for official statements, interview requests, or press credentials. We value our relationship with the media and are eager to collaborate on sharing the latest news, updates, and player interviews. ",
  },
];

const Contact = () => {
  return (
    <div className="contact">
      <header>
        <h1 className="heading-1--light contact-header">Contact Information</h1>
        <h4 className="heading-4">
          Details for fans to get in touch with the club for inquiries, support,
          or other matters.
        </h4>
      </header>
      <ul id="contacts">
        <li className="contact-list">
          <h4 className="heading-4">{contacts[0].title}</h4>
          <p className="paragraph-text">{contacts[0].description}</p>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
