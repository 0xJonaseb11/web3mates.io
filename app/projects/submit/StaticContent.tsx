"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { validateForm, validateField } from "@/utils/validation";

const statusOptions = ["Live", "Beta", "Coming Soon", "Prototype", "Ideation"];
const categoryOptions = ["DeFi", "NFT", "DAOs", "Payments", "Education", "Social Impact", "E-commerce", "Gaming", "Infrastructure"];
const techStackOptions = ["Solidity", "Next.js", "IPFS", "Aragon", "Gnosis Safe", "The Graph", "Circle API", "WalletConnect", "Node.js", "React", "Firebase", "Web3.js", "Hardhat", "Ethers.js", "TypeScript"];

export default function SubmitProjectPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: [] as string[],
    status: "Ideation",
    logo: "",
    team: [{ name: "", role: "" }],
    tech: [] as string[],
    website: "",
    twitter: "",
    github: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const requiredFields = ["title", "description", "status"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    
    // Validate field on blur - only validate string fields
    const value = formData[field as keyof typeof formData];
    if (typeof value === 'string') {
      const error = validateField(field, value, true);
      if (error) {
        setErrors(prev => ({ ...prev, [field]: error.message }));
      } else {
        setErrors(prev => ({ ...prev, [field]: "" }));
      }
    }
  };

  const handleTagChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      const { value } = target;
      if (e.key === "Enter" && value.trim() && !formData.tags.includes(value.trim())) {
        setFormData(prev => ({
          ...prev,
          tags: [...prev.tags, value.trim()]
        }));
        target.value = "";
      }
    };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleTechChange = (tech: string) => {
    setFormData(prev => {
      if (prev.tech.includes(tech)) {
        return {
          ...prev,
          tech: prev.tech.filter(t => t !== tech)
        };
      } else {
        return {
          ...prev,
          tech: [...prev.tech, tech]
        };
      }
    });
  };

  const handleTeamMemberChange = (index: number, field: "name" | "role", value: string) => {
    const newTeam = [...formData.team];
    newTeam[index] = {
      ...newTeam[index],
      [field]: value
    };
    setFormData(prev => ({
      ...prev,
      team: newTeam
    }));
  };

  const addTeamMember = () => {
    setFormData(prev => ({
      ...prev,
      team: [...prev.team, { name: "", role: "" }]
    }));
  };

  const removeTeamMember = (index: number) => {
    if (formData.team.length > 1) {
      const newTeam = formData.team.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        team: newTeam
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Validate all fields
    const validation = validateForm(formData, requiredFields);
    
    if (!validation.isValid) {
      const newErrors: Record<string, string> = {};
      validation.errors.forEach(error => {
        newErrors[error.field] = error.message;
      });
      setErrors(newErrors);
      setError("Please fix the errors in the form before submitting.");
      setIsSubmitting(false);
      return;
    }

    if (formData.tags.length === 0) {
      setError("Please add at least one tag");
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("Submitting project:", formData);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      router.push("/projects");
    } catch (err) {
      setError("Failed to submit project. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl mt-10 sm:text-4xl font-bold text-gray-900 mb-4">
          Submit Your <span className="text-blue-600">Project</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Share your Web3 project with our community and get discovered by developers, investors, and collaborators.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8"
      >
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <div className="space-y-8">
            {/* Basic Project Info */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Project Information
              </h2>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Name *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    onBlur={() => handleBlur("title")}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-blue-500 focus:border-blue-500 ${
                      errors.title ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g. AfriChain Marketplace"
                    required
                  />
                  {errors.title && touched.title && (
                    <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    onBlur={() => handleBlur("description")}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-blue-500 focus:border-blue-500 ${
                      errors.description ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Briefly describe your project (what problem it solves, how it works, etc.)"
                    required
                  />
                  {errors.description && touched.description && (
                    <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Status *
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    onBlur={() => handleBlur("status")}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-blue-500 focus:border-blue-500 ${
                      errors.status ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    {statusOptions.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                  {errors.status && touched.status && (
                    <p className="mt-1 text-sm text-red-600">{errors.status}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="logo" className="block text-sm font-medium text-gray-700 mb-1">
                    Logo URL
                  </label>
                  <input
                    type="url"
                    id="logo"
                    name="logo"
                    value={formData.logo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://example.com/logo.jpg"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
                    Categories/Tags *
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {formData.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="inline-flex items-center bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                        <button 
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="ml-2 text-gray-500 hover:text-gray-700"
                        >
                          &times;
                        </button>
                      </span>
                    ))}
                  </div>
                  <input
                    type="text"
                    id="tags"
                    onKeyDown={handleTagChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Type a tag and press Enter (e.g. DeFi, NFT)"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Select from common categories: {categoryOptions.join(", ")}
                  </p>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Team Members
              </h2>
              
              {formData.team.map((member, index) => (
                <div key={index} className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6 last:mb-0">
                  <div>
                    <label htmlFor={`team-name-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                      Team Member {index + 1} Name
                    </label>
                    <input
                      type="text"
                      id={`team-name-${index}`}
                      value={member.name}
                      onChange={(e) => handleTeamMemberChange(index, "name", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label htmlFor={`team-role-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                      Role
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        id={`team-role-${index}`}
                        value={member.role}
                        onChange={(e) => handleTeamMemberChange(index, "role", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g. Founder, Developer"
                      />
                      {formData.team.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeTeamMember(index)}
                          className="ml-2 px-4 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              <button
                type="button"
                onClick={addTeamMember}
                className="mt-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium"
              >
                + Add Team Member
              </button>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Technology Stack
              </h2>
              
              <div className="flex flex-wrap gap-3">
                {techStackOptions.map(tech => (
                  <label key={tech} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.tech.includes(tech)}
                      onChange={() => handleTechChange(tech)}
                      className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{tech}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Project Links
              </h2>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://yourproject.com"
                  />
                </div>
                <div>
                  <label htmlFor="twitter" className="block text-sm font-medium text-gray-700 mb-1">
                    X (Twitter)
                  </label>
                  <input
                    type="url"
                    id="twitter"
                    name="twitter"
                    value={formData.twitter}
                    onChange={handleChange}
                    placeholder="https://x.com/yourproject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#0066FF] focus:border-[#0066FF]"
                  />
                </div>
                <div>
                  <label htmlFor="github" className="block text-sm font-medium text-gray-700 mb-1">
                    GitHub
                  </label>
                  <input
                    type="url"
                    id="github"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://github.com/yourproject"
                  />
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Project"}
              </button>
              <p className="mt-2 text-sm text-gray-500">
                Your project will be reviewed by our team before being published.
              </p>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
}