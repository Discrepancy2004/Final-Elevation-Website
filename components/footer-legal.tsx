"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function FooterLegal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <p className="mt-4 text-sm text-neutral-500">
        ELEVATION SOFTWARE SOLUTIONS PTY LTD&nbsp;&nbsp;ABN&nbsp;&nbsp;24 698 586 944
        <span className="mx-2 text-neutral-600" aria-hidden>
          |
        </span>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="cursor-pointer underline underline-offset-2 transition-colors hover:text-neutral-300"
        >
          Privacy Policy
        </button>
      </p>

      <Dialog open={open} onOpenChange={() => {}}>
        <DialogContent
          showCloseButton={false}
          className="max-h-[85vh] overflow-y-auto sm:max-w-lg"
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle>Privacy Policy</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 text-sm leading-relaxed text-neutral-600">
            <p>
              Elevation Software Solutions Pty Ltd (&quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;) respects your privacy and is committed to protecting
              personal information we collect in connection with our website and
              services.
            </p>
            <p>
              <strong>Information we collect.</strong> We may collect information
              you provide directly, such as your name, email address, company name,
              and message content when you contact us or submit a form. We may also
              collect limited technical data such as browser type, device
              information, and usage data to improve our website.
            </p>
            <p>
              <strong>How we use information.</strong> We use your information to
              respond to enquiries, provide our testing and quality assurance
              services, improve our website, and communicate with you about our
              services where permitted.
            </p>
            <p>
              <strong>Sharing of information.</strong> We do not sell your personal
              information. We may share information with trusted service providers
              who assist us in operating our website and business, subject to
              appropriate confidentiality obligations, or when required by law.
            </p>
            <p>
              <strong>Data security.</strong> We take reasonable steps to protect
              personal information from unauthorised access, loss, misuse, or
              alteration. No method of transmission over the internet is completely
              secure.
            </p>
            <p>
              <strong>Your rights.</strong> You may request access to, correction
              of, or deletion of your personal information by contacting us using
              the details on our website.
            </p>
            <p>
              <strong>Changes.</strong> We may update this policy from time to time.
              Continued use of our website after changes are posted constitutes
              acceptance of the updated policy.
            </p>
            <p>
              <strong>Contact.</strong> For privacy-related questions, contact us
              at hello@elevationsoftwaresolutions.com.au.
            </p>
          </div>

          <DialogFooter className="sm:justify-center">
            <Button
              type="button"
              className="bg-emerald-700 hover:bg-emerald-800"
              onClick={() => setOpen(false)}
            >
              I understand
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
