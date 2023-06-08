'use client'
import PocketBase from 'pocketbase';

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import useLogout from "./hooks/useLogout"
import { useRouter } from "next/navigation";

export function SiteHeader() {
  const logout = useLogout();
  
  const url = 'https://fit-engineer.pockethost.io'
const pb = new PocketBase(url)
  const isLoggedIn = pb.authStore.isValid
  const router = useRouter()
  function redirecttosignup(){
    router.push("/signup")
  }
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
          
           
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                
                {isLoggedIn ?<button onClick={logout}>Log Out</button>:<button onClick={redirecttosignup}>Signup</button> }
              </div>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
