
import { useState } from 'react';
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';
import ContactIcons from '@/components/shared/ContactIcons';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 section-fade-in">
          <div>
            <SectionHeading title="Get In Touch" />
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground">laxmisahu1211@gmail.com</p>
                  <p className="text-sm mt-1">Feel free to email me for any inquiries or discussions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Phone</h3>
                  <p className="text-muted-foreground">+46 764453551</p>
                  <p className="text-sm mt-1">Available during business hours for urgent matters.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Location</h3>
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
          
          <div>
            <SectionHeading title="Send Message" />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="john@example.com" 
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  placeholder="Project Discussion" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Your message here..." 
                  className="min-h-[150px]" 
                  required 
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full md:w-auto"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
