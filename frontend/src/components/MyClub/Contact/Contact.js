import "./Contact.scss";
import ContactList from "./ContactList";

const contacts = [
  {
    title: "General Inquiries",
    description:
      "For any general inquiries or questions about FC THG08, we are here to assist you. If you want to learn more about the club's history, membership options, or upcoming events, our dedicated support team is just an email away.",
  },
  {
    title: "Support",
    description:
      "Are you a proud member of FC THG08? Our Membership Support team is available to address any queries related to your membership experience. Whether you need assistance with renewals, benefits, or personalized club merchandise, we're here to provide help.",
  },
  {
    title: "Media and Press Enquiries",
    description:
      "Members of the media and press can get in touch with our media relations team for official statements, interview requests, or press credentials. We value our relationship with the media and are eager to collaborate on sharing the latest news, updates, and player interviews. ",
  },
];

const Contact = () => {
  return (
    <div className="contact">
      <header className="mb-lg">
        <h1 className="heading-1--light mb-sm">Contact Information</h1>
        <p className="paragraph-text">
          Details for fans to get in touch with the club for inquiries, support,
          or other matters.
        </p>
      </header>
      <ul id="contacts">
        <ContactList
          title={contacts[0].title}
          description={contacts[0].description}
        />
        <ContactList
          title={contacts[1].title}
          description={contacts[1].description}
        />
        <ContactList
          title={contacts[2].title}
          description={contacts[2].description}
        />
      </ul>
    </div>
  );
};

export default Contact;
