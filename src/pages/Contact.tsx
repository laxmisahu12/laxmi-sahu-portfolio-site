
import { useState } from 'react';
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';
import ContactIcons from '@/components/shared/ContactIcons';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        subject: `Portfolio Contact: ${formData.subject}`,
        message: formData.message
      };

      await emailjs.init("rbJDmgr5qIf0cNz-U"); // Initialize with public key

      const response = await emailjs.send(
        'service_7k1zrwo', 
        'template_h6c09dr', 
        templateParams
      );

      console.log('Email sent successfully:', response);

      if (response.status === 200) {
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
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start group">
                <div className="mr-4 mt-1 text-muted-foreground group-hover:text-primary transition-colors">
                  <Mail className="" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 group-hover:text-primary transition-colors">Email</h3>
                  <p className="text-muted-foreground">laxmisahu1211@gmail.com</p>
                  <p className="text-sm mt-1">Feel free to email me for any inquiries or discussions.</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="mr-4 mt-1 text-muted-foreground group-hover:text-primary transition-colors">
                  <Phone className="" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 group-hover:text-primary transition-colors">Phone</h3>
                  <p className="text-muted-foreground">+46 764453551</p>
                  <p className="text-sm mt-1">Available during business hours for urgent matters.</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="mr-4 mt-1 text-muted-foreground group-hover:text-primary transition-colors">
                  <MapPin className="" size={24} />
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
          
          <div>
            <h2 className="text-2xl font-bold mb-8">Send Message</h2>
            
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
                    className="hover:border-primary focus:border-primary"
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
                    className="hover:border-primary focus:border-primary"
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
                  className="hover:border-primary focus:border-primary"
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
                  className="min-h-[150px] hover:border-primary focus:border-primary" 
                  required 
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full md:w-auto group"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
