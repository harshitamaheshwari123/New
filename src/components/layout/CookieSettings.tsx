"use client";

import { X } from "lucide-react";

type Props = {
  onClose: () => void;
};

export default function CookieSettings({ onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 text-black shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Cookie settings</h2>
          <button onClick={onClose} className="p-1">
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="mb-4 text-sm text-gray-700">
          We use essential cookies to make this site work, and optional
          analytics cookies to help us improve it. You can change your choices
          at any time.
        </p>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
          >
            Reject all
          </button>
          <button
            onClick={onClose}
            className="rounded-md bg-black px-3 py-2 text-sm text-white"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
