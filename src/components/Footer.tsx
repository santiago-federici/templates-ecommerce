export function Footer() {
  return (
    <footer className="wrapper py-10 flex flex-col gap-10">
      <div className="space-y-4">
        <div className="bg-neutral-500 rounded-sm w-40 h-8"></div>
        <p>
          Beautifully designed, expertly crafted components and templates, built
          by the makers of Tailwind CSS. The perfect starting point for your
          next project.
        </p>
      </div>

      <span className="w-full h-px bg-gray-300"></span>

      <nav className="flex justify-between items-start">
        <ul className="space-y-2">
          <li className="font-semibold">Marketing</li>
          <li>Hero Sections</li>
          <li>Feature Sections</li>
          <li>Pricing Sections</li>
          <li>Header Sections</li>
          <li>Newsletter Sections</li>
          <li>Testimonials</li>
          <li>Team Sections</li>
          <li>Content Sections</li>
          <li>Logo Clouds</li>
          <li>FAQs</li>
          <li>Footers</li>
          <li>Headers</li>
          <li>Flyout Menus</li>
          <li>Banners</li>
          <li>Browse all →</li>
        </ul>
        <ul className="space-y-2">
          <li className="font-semibold">Application UI</li>
          <li>Tables</li>
          <li>Feeds</li>
          <li>Form Layouts</li>
          <li>Select Menus</li>
          <li>Radio Groups</li>
          <li>Checkboxes</li>
          <li>Comboboxes</li>
          <li>Navbars</li>
          <li>Pagination</li>
          <li>Sidebar Navigation</li>
          <li>Command Palettes</li>
          <li>Modals</li>
          <li>Dropdowns</li>
          <li>Buttons</li>
          <li>Browse all →</li>
        </ul>
        <ul className="space-y-2">
          <li className="font-semibold">Ecommerce</li>
          <li>Product Overviews</li>
          <li>Product Lists</li>
          <li>Category Previews</li>
          <li>Shopping Carts</li>
          <li>Category Filters</li>
          <li>Product Quickviews</li>
          <li>Product Features</li>
          <li>Store Navigation</li>
          <li>Promo Sections</li>
          <li>Checkout Forms</li>
          <li>Reviews</li>
          <li>Order Summaries</li>
          <li>Order History</li>
          <li>Incentives</li>
          <li>Browse all →</li>
        </ul>
        <ul className="space-y-2">
          <li className="font-semibold">Templates & UI Kits</li>
          <li>Catalyst UI Kit</li>
          <li>Personal Website Template</li>
          <li>Landing Page Template</li>
          <li>API Reference Template</li>
          <li>Changelog Template</li>
          <li>Info Product Template</li>
          <li>Agency Template</li>
          <li>Podcast Template</li>
          <li>App Marketing Template</li>
          <li>Documentation Template</li>
          <li>Conference Template</li>
          <li>Browse all →</li>
        </ul>
      </nav>

      <span className="w-full h-px bg-gray-300"></span>

      <div className="flex justify-between items-center">
        <p>© 2024 Tailwind Labs Inc. All rights reserved.</p>

        <div className="flex gap-4 items-center">
          <p className="font-medium">Privacy policy</p>
          <span className="h-6 w-px bg-gray-300"></span>
          <p className="font-medium">Changelog</p>
        </div>
      </div>
    </footer>
  );
}
