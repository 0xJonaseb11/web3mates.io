"use client";

import { useState, useRef, useEffect } from 'react';
import { countryCodes, validatePhoneWithCountryCode } from '@/utils/validation';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  onCountryCodeChange: (countryCode: string) => void;
  countryCode: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  className?: string;
}

export default function PhoneInput({
  value,
  onChange,
  onCountryCodeChange,
  countryCode,
  placeholder = "Phone number",
  required = false,
  error,
  className = ""
}: PhoneInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry = countryCodes.find(c => c.code === countryCode) || countryCodes[0];

  const filteredCountries = countryCodes.filter(country =>
    country.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.includes(searchTerm)
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCountrySelect = (code: string) => {
    onCountryCodeChange(code);
    setIsOpen(false);
    setSearchTerm("");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneValue = e.target.value;
    // Only allow digits, spaces, hyphens, and parentheses
    const cleanValue = phoneValue.replace(/[^\d\s\-\(\)]/g, '');
    onChange(cleanValue);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex">
        {/* Country Code Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-2 sm:px-4 py-2 sm:py-3 border-2 border-r-0 border-gray-200 rounded-l-xl bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          >
            <span className="text-base sm:text-lg mr-1 sm:mr-2">{selectedCountry.flag}</span>
            <span className="text-xs sm:text-sm font-medium text-gray-700">{selectedCountry.code}</span>
            <svg
              className={`ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute z-50 mt-1 w-72 sm:w-80 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-hidden">
              {/* Search Input */}
              <div className="p-3 border-b border-gray-200">
                <input
                  type="text"
                  placeholder="Search countries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Countries List */}
              <div className="max-h-48 overflow-y-auto">
                {filteredCountries.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => handleCountrySelect(country.code)}
                    className="w-full flex items-center px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-colors"
                  >
                    <span className="text-lg mr-3">{country.flag}</span>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium text-gray-900">{country.country}</div>
                      <div className="text-xs text-gray-500">{country.code}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Phone Number Input */}
        <input
          type="tel"
          value={value}
          onChange={handlePhoneChange}
          placeholder={placeholder}
          required={required}
          className={`flex-1 px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-r-xl transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base ${
            error ? 'border-red-500 bg-red-50 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 bg-white hover:border-gray-300'
          }`}
        />
      </div>

      {/* Error Message */}
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
