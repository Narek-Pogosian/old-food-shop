import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import CartDrawer from "./cart/cart-drawer";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-50 shadow-lg bg-card">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2 md:gap-8">
          <Link href="/" className="font-bold tracking-wider uppercase">
            Food Shop
          </Link>
          <nav className="flex text-sm">
            <Button asChild variant="link" size="sm">
              <Link href="/shop">Shop</Link>
            </Button>
          </nav>
        </div>
        <div className="flex gap-1 md:gap-2">
          <ModeToggle />
          <CartDrawer />
        </div>
      </div>
    </header>
  );
};

export default Header;
