"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { validateForm, validateField } from "@/utils/validation";

const CollaborationHero = () => {
  const [feedback, setFeedback] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const url = process.env.NEXT_PUBLIC_FORMSPREE_FEEDBACK_URL;
  const { toast, ToastContainer } = useToast();

  const requiredFields = ["feedback"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFeedback(value);

    // Clear error when user starts typing
    if (errors.feedback) {
      setErrors(prev => ({ ...prev, feedback: "" }));
    }
  };

  const handleBlur = () => {
    setTouched(prev => ({ ...prev, feedback: true }));
    
    // Validate field on blur
    const error = validateField("feedback", feedback, true);
    if (error) {
      setErrors(prev => ({ ...prev, feedback: error.message }));
    } else {
      setErrors(prev => ({ ...prev, feedback: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark field as touched to show errors
    setTouched({ feedback: true });

    // Validate field
    const validation = validateForm({ feedback }, requiredFields);
    
    if (!validation.isValid) {
      const newErrors: Record<string, string> = {};
      validation.errors.forEach(error => {
        newErrors[error.field] = error.message;
      });
      setErrors(newErrors);
      
      toast({
        title: "Please fix the form errors",
        description: "Check the highlighted field below and correct any errors.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    toast({
      title: "Submitting feedback...",
      description: "Please wait while your feedback is being sent.",
    });

    try {
      // Create FormData with the feedback
      const data = new FormData();
      data.append("form_type", "general_feedback");
      data.append("feedback", feedback);

      const response = await fetch(url || "https://formspree.io/f/YOUR_COLLABORATION_FORM_ID", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Feedback Sent!",
          description: "Your feedback has been sent successfully. Thank you for sharing your ideas with us!",
          variant: "success",
        });
        setFeedback("");
        setErrors({});
        setTouched({});
      } else {
        const result = await response.json();
        toast({
          title: "Submission Failed",
          description: result.errors
            ? result.errors
                .map((err: { message: string }) => err.message)
                .join(", ")
            : "There was an issue sending your feedback. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 pt-20 sm:pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-[#0066FF] font-medium mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base">
            1% OF THE INDUSTRY
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1C39] mb-4 sm:mb-6">
            <span className="text-[#0066FF]">Collaborate</span> with Us. Impact
            the World.
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 lg:mb-12">
            At Web3 Mates, we believe in the power of collaboration to drive
            change—not just in Africa, but across the globe. Whether you&apos;re
            a Web3 company, university, tech hub, or nonprofit, we welcome you
            to join us in shaping the future of decentralized innovation.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center max-w-2xl mx-auto gap-3 sm:gap-4">
            <div className="relative flex-1 text-black w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-4 pointer-events-none text-gray-400">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4M4 12l6-6m-6 6l6 6"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="feedback"
                value={feedback}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Feel free to share your ideas or feedback here ..."
                className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 text-black py-2 sm:py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:border-[#0066FF] bg-white text-sm sm:text-base ${
                  errors.feedback ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                }`}
                required
              />
              {errors.feedback && touched.feedback && (
                <p className="mt-1 text-sm text-red-600 text-left">{errors.feedback}</p>
              )}
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-[#0066FF] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send feedback"}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default CollaborationHero;
