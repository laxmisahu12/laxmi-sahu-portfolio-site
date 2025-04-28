
import PageBanner from '@/components/shared/PageBanner';
import ContactIcons from '@/components/shared/ContactIcons';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Laxmi Sahu</title>
        <meta name="description" content="Get in touch with Laxmi Sahu for collaboration, opportunities, or to discuss data engineering and full stack development projects." />
      </Helmet>
      
      <PageBanner 
        title="Contact Me" 
        subtitle="Let's connect and discuss how we can work together"
      />
      
      <div className="section-container">
        <div className="max-w-2xl mx-auto bg-secondary/30 p-8 rounded-lg border border-border/50">
          <h2 className="text-2xl font-bold mb-8 text-primary">Get In Touch</h2>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start group">
              <div className="mr-4 mt-1 text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1 group-hover:text-primary transition-colors">Email</h3>
                <p className="text-muted-foreground">laxmisahu1211@gmail.com</p>
                <p className="text-sm mt-1">Feel free to email me for any inquiries or discussions.</p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <div className="mr-4 mt-1 text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1 group-hover:text-primary transition-colors">Phone</h3>
                <p className="text-muted-foreground">+46 764453551</p>
                <p className="text-sm mt-1">Available during business hours for urgent matters.</p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <div className="mr-4 mt-1 text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1 group-hover:text-primary transition-colors">Location</h3>
                <p className="text-muted-foreground">Stockholm, Sweden</p>
                <p className="text-sm mt-1">Currently based in Stockholm, available for remote work globally.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Connect With Me</h3>
            <ContactIcons />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
