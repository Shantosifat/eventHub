import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
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
              <SignedOut>
              <SignInButton mode="modal">
                <Button size="sm">Sign In</Button>
              </SignInButton>
            
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

          </div>
        </div>

        {/* search & location - Mobile */}
      </nav>

      {/* subscription modal */}
    </>
  );
};

export default Header;
