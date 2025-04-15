
import { useState } from 'react';
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';
import ContactIcons from '@/components/shared/ContactIcons';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        err.errors.forEach(error => {
          if (error.path[0]) {
            newErrors[error.path[0].toString()] = error.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please check the form for errors",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message
      };

      const response = await emailjs.send(
        'service_7k1zrwo',
        'template_h6c09dr',
        templateParams,
        'rbJDmgr5qIf0cNz-U'
      );

      if (response.status === 200) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
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
          <div className="bg-secondary/30 p-8 rounded-lg border border-border/50">
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
          
          <div className="bg-secondary/30 p-8 rounded-lg border border-border/50">
            <h2 className="text-2xl font-bold mb-8 text-primary">Send Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Your Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="John Doe" 
                  className="border-border/50 hover:border-primary focus:border-primary bg-background/50"
                />
                {errors.name && <p className="text-destructive text-sm">{errors.name}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Your Email</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="john@example.com" 
                  className="border-border/50 hover:border-primary focus:border-primary bg-background/50"
                />
                {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Your message here..." 
                  className="min-h-[150px] border-border/50 hover:border-primary focus:border-primary bg-background/50" 
                />
                {errors.message && <p className="text-destructive text-sm">{errors.message}</p>}
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="group w-full bg-primary text-primary-foreground hover:bg-primary/80"
              >
                {isSubmitting ? 'Sending...' : (
                  <span className="flex items-center">
                    Send Message
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
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
