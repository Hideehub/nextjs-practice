'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/contact/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
      setFormData({ name: '', message: '' });
    }
  };

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-xl font-semibold text-center">Contact Me</h2>

        {submitted && <p className="text-green-600">Thank you for your message!</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />

          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            required
          />

          <Button variant="default" className = 'w-full bg-[tomato] text-black hover:text-white hover:bg-[tomato]'>Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
}
