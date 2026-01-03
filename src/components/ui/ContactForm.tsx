"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Button } from "./Button";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  organization: z.string().optional(),
  service: z.enum(["rna-seq", "single-cell", "microbiome", "nanopore", "wgs-snp", "other"]),
  message: z.string().min(10, "Please provide more details about your project"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Name *"
        placeholder="Your name"
        {...register("name")}
        error={errors.name?.message}
      />

      <Input
        label="Email *"
        type="email"
        placeholder="your.email@example.com"
        {...register("email")}
        error={errors.email?.message}
      />

      <Input
        label="Organization / Institution"
        placeholder="University or Company"
        {...register("organization")}
        error={errors.organization?.message}
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Service Interest *
        </label>
        <select
          {...register("service")}
          className="flex h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-base ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
        >
          <option value="">Select a service...</option>
          <option value="rna-seq">RNA-Sequencing Analysis</option>
          <option value="single-cell">Single Cell RNA-Sequencing</option>
          <option value="microbiome">Microbiome Analysis</option>
          <option value="nanopore">Nanopore Long-Read Processing</option>
          <option value="wgs-snp">Whole Genome Sequencing</option>
          <option value="other">Other / Custom Analysis</option>
        </select>
        {errors.service && (
          <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
        )}
      </div>

      <Textarea
        label="Project Details *"
        placeholder="Tell us about your project, data type, research questions, and timeline..."
        rows={6}
        {...register("message")}
        error={errors.message?.message}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      {submitStatus === "success" && (
        <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" />
          <p className="text-sm">
            Message sent successfully! We'll get back to you within 24 hours.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          <XCircle className="w-5 h-5 mr-2 flex-shrink-0" />
          <p className="text-sm">
            Failed to send message. Please try again or email us directly.
          </p>
        </div>
      )}
    </form>
  );
}
