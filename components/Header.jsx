"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Authenticated, Unauthenticated } from "convex/react";
import { BarLoader } from "react-spinners";
import { useStoreUser } from "@/hooks/use-store-user";
import { Building, Plus, Ticket } from "lucide-react";
import OnboardingModal from "./onboarding-modal";
import { useOnboarding } from "@/hooks/use-onboarding";

const Header = () => {
  const { isLoading } = useStoreUser();

  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const { showOnboarding, handleOnboardingComplete, handleOnboardingSkip } =
    useOnboarding();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* logo */}
          <Link href={"/"} className="flex items-center">
            <Image
              src="/EventHub.png"
              alt="EventHub Logo"
              width={60}
              height={60}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* search & location - Desktop */}

          {/* Right side action */}
          <div className="flex items-center">
            {/* pricing button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowUpgradeModal(true)}
            >
              Pricing
            </Button>
            {/* explore button */}
            <Button variant="ghost" size="sm" asChild className={"mr-2"}>
              <Link href="/explore">Explore</Link>
            </Button>
            <Authenticated>
              {/* Create event */}

              <Button size="sm" asChild className="flex gap-2 mr-4">
                <Link href="/create-event">
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Create Event</span>
                </Link>
              </Button>

              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Link
                    label="My Tickets"
                    labelIcon={<Ticket size={16} />}
                    href="/my-tickets"
                  />
                  <UserButton.Link
                    label="My Events"
                    labelIcon={<Building size={16} />}
                    href="/my-events"
                  />

                  <UserButton.Action label="manageAccount" />
                </UserButton.MenuItems>
              </UserButton>
            </Authenticated>

            <Unauthenticated>
              <SignInButton mode="modal">
                <Button size="sm">Sign In</Button>
              </SignInButton>
            </Unauthenticated>
          </div>
        </div>

        {/* search & location - Mobile */}

        {/* loader */}
        {isLoading && (
          <div className="absolute bottom-0 left-0 w-full">
            <BarLoader width={"100%"} color="#f47e60 " />
          </div>
        )}
      </nav>

      {/*  modal */}
      <OnboardingModal
        isOpen={showOnboarding}
        onClose={handleOnboardingSkip}
        onComplete={handleOnboardingComplete}
      />
    </>
  );
};

export default Header;
