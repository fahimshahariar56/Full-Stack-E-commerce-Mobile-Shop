# MASTER PROMPT — 30-DAY PREMIUM MOBILE ACCESSORIES E-COMMERCE

## ROLE

You are my senior full-stack software engineer, software architect, UI/UX designer, animation engineer, DevOps engineer, database engineer, security engineer, QA engineer, SEO engineer, and technical mentor.

We are building a premium, production-ready Mobile Accessories E-commerce Platform over 30 development days.

The final website must feel like a serious premium commercial brand — not a tutorial project or generic MERN template.

Take inspiration from premium technology brands such as Samsung and Apple for polish, spacing, typography, subtle motion, buttons, product presentation, and authentication interaction quality, but DO NOT copy their exact layout, branding, assets, text, code, or identity. Create an original design.

---

## 1. CORE OBJECTIVE

Build a complete e-commerce platform for:

- Phone cases
- Chargers
- Cables
- Power banks
- Earphones
- Headphones
- Screen protectors
- Adapters
- Phone holders
- Smart accessories
- Other mobile accessories

Two separate experiences:

1. Customer Website
2. Separate protected Admin Panel

Architecture:

Customer → Vercel React Frontend → REST API → Hostinger Node/Express Backend → MongoDB Atlas

Additional services:
- Cloudinary for product images
- Google OAuth for customer login
- GitHub for source control
- COD + manual bKash + manual Nagad initially
- Architecture ready for SSLCOMMERZ later

---

## 2. PREMIUM DESIGN REQUIREMENTS

The website must look:

- Premium
- Minimal
- Modern
- Clean
- High-end
- Professional
- Technology-focused
- Fast

Implement:

- Premium Light Mode
- Premium Dark Mode
- Smooth theme switching
- System theme detection
- Theme persistence
- Smooth scrolling
- Subtle page transitions
- Premium buttons
- Refined hover effects
- Micro-interactions
- Smooth product image transitions
- Premium loading screens
- Skeleton loaders
- Smooth cart interactions
- Smooth modals/dropdowns
- Responsive navigation

Animations must be subtle, elegant, purposeful, fast, and premium.

DO NOT use excessive bouncing, flashy effects, heavy parallax, unnecessary particles, or animations that make the website slower.

Avoid excessive gradients, glassmorphism, shadows, cards, and visual clutter.

Create a consistent reusable design system.

---

## 3. TECHNOLOGY STACK

### Frontend
- React
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router
- Axios
- React Hook Form
- Zod
- Lucide React

Use Motion/Framer Motion or lightweight CSS animation only where justified.

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- REST API
- dotenv
- Cloudinary SDK

### Development
- Git
- GitHub
- ESLint
- Prettier

### Deployment
- Frontend: Vercel
- Backend: Hostinger VPS / suitable Node.js hosting
- Database: MongoDB Atlas
- Images: Cloudinary

Do not add unnecessary dependencies.

---

## 4. THEME SYSTEM

Themes:

1. Light
2. Dark
3. System

Requirements:

- Smooth theme transition
- Persist selected theme
- Respect system preference
- Theme toggle in header
- Theme toggle in mobile menu
- Theme preference in account settings where appropriate
- Prevent flash of incorrect theme on load

Use an efficient transition. Do not create expensive animations.

---

## 5. SMOOTH SCROLL + MOTION

Implement smooth scrolling where appropriate.

Requirements:

- Smooth anchor navigation
- Smooth section transitions
- Respect prefers-reduced-motion
- No scroll-jacking
- Maintain accessibility

Use a lightweight motion system with consistent:

- durations
- easing
- entrance
- exit
- hover
- tap
- page transitions

Prefer opacity and transform animations.

---

## 6. PREMIUM BUTTON SYSTEM

Create:

- Primary
- Secondary
- Outline
- Ghost
- Destructive
- Icon
- Loading
- Add to Cart
- Buy Now
- Checkout

Buttons should have:

- subtle hover
- subtle movement
- smooth transitions
- focus state
- active state
- disabled state
- loading state

The button quality should feel similar to premium technology websites: refined and responsive, not flashy.

---

## 7. PREMIUM LOADING SYSTEM

Create a unified loading experience:

- Initial application loader
- Route/page loader
- Product skeleton
- Product grid skeleton
- Admin dashboard skeleton
- Table skeleton
- Button loading
- Image loading
- Checkout loading

Use elegant skeleton shimmer, fade, or minimal spinner.

Avoid unnecessary full-screen loaders.

---

## 8. CUSTOMER AUTHENTICATION

Support:

### Email + Password
### Phone Number + Password
### Google Login

Customer features:

- Register
- Login
- Logout
- Forgot password
- Reset password
- Change password
- Update profile
- Manage addresses
- View orders
- Wishlist
- Preferences

Registration fields:

- Full name
- Email and/or phone
- Password
- Confirm password
- Terms & Conditions acceptance

Validate all fields server-side and client-side.

---

## 9. GOOGLE LOGIN

Implement Google OAuth for customers.

Requirements:

- Google login button
- Secure OAuth flow
- Backend identity verification
- Account linking where appropriate
- Existing-account handling
- Secure session/token handling

Never trust unverified client-side identity data.

Use environment variables for credentials.

---

## 10. CUSTOMER LOGIN / REGISTER DESIGN

Login and registration pages should be inspired by the interaction quality and animation style of premium Samsung-style authentication experiences, but must NOT copy Samsung's exact layout, branding, assets, text, or implementation.

Use inspiration for:

- smooth transitions
- clean typography
- elegant focus states
- subtle entrance animations
- refined buttons
- minimal composition
- polished validation/error messages

Create an original design.

Login:

- Email/phone
- Password
- Show/hide password
- Google login
- Forgot password
- Register link

Register:

- Name
- Email
- Phone
- Password
- Confirm password
- Terms acceptance
- Google signup/login
- Login link

Use subtle transitions between login/register where appropriate.

---

## 11. ADMIN AUTHENTICATION

Admin authentication must be separate from customer authentication.

Example:

/admin/login

Admin login:

- Email/username
- Password
- Secure authentication
- Protected routes
- Backend role authorization

Roles:

- Super Admin
- Admin
- Staff

Permissions must be enforced on the backend, not only frontend.

---

## 12. ADMIN PANEL

Create a premium, responsive admin dashboard.

### Dashboard

Show:

- Total sales
- Today's sales
- Monthly sales
- Total orders
- Pending orders
- Processing orders
- Shipped orders
- Delivered orders
- Cancelled orders
- Total customers
- Total products
- Low-stock products
- Out-of-stock products
- Recent orders
- Recent customers

Charts:

- Daily sales
- Weekly sales
- Monthly sales
- Order status distribution
- Top-selling products
- Category performance

Support useful date filters.

---

## 13. ADMIN PRODUCT MANAGEMENT

Admin can:

- Create product
- Edit product
- Delete product
- Activate/deactivate
- Upload/reorder images
- Set thumbnail
- Manage stock
- Manage variants
- Manage SKU
- Set price
- Set discount price
- Set brand
- Set category
- Set subcategory
- Add tags
- Set featured
- Set bestseller
- Set new arrival
- Configure specifications
- Configure SEO
- Preview product

Use Cloudinary.

Validate image type and size.

---

## 14. PRODUCT MODEL

Support:

- Name
- Slug
- SKU
- Short description
- Full description
- Brand
- Category
- Subcategory
- Price
- Discount price
- Stock quantity
- Low stock threshold
- Images
- Thumbnail
- Variants
- Specifications
- Tags
- Featured
- Bestseller
- New arrival
- Active
- SEO title
- SEO description
- Created date
- Updated date

Variants may include:

- Color
- Model
- Size
- Compatibility
- Other attributes

---

## 15. CATEGORY + BRAND MANAGEMENT

Categories:

- Create
- Edit
- Delete
- Activate/deactivate
- Subcategories
- Images
- SEO

Brands:

- Create
- Edit
- Delete
- Activate/deactivate
- Logo
- SEO

Example categories:

- Cases
- Chargers
- Cables
- Power Banks
- Audio
- Screen Protectors
- Adapters
- Holders
- Smart Accessories

---

## 16. CUSTOMER PAGES

Create:

- Home
- Shop
- Category
- Product Details
- Search Results
- Cart
- Checkout
- Login
- Register
- Forgot Password
- Reset Password
- My Account
- My Orders
- Order Details
- Wishlist
- About
- Contact
- FAQ
- Privacy Policy
- Terms & Conditions
- Return Policy
- Refund Policy
- Shipping Policy
- Cookie Policy where appropriate
- 404
- Service unavailable/maintenance state

---

## 17. PREMIUM HOMEPAGE

Sections:

- Announcement bar
- Header
- Hero
- Featured categories
- Featured products
- Best sellers
- New arrivals
- Promotional banners
- Deals
- Brands
- Why choose us
- Reviews
- FAQ preview
- Newsletter
- Footer

Hero must be visually strong but fast.

Use optimized images and lazy loading.

---

## 18. HEADER

Desktop:

- Logo
- Shop
- Categories
- Search
- Wishlist
- Account
- Cart
- Theme toggle

Mobile:

- Logo
- Search
- Cart
- Menu

Mobile menu should have smooth animation.

Sticky header may be used if it improves UX.

---

## 19. PRODUCT CARD

Premium product cards:

- Image
- Product name
- Brand
- Rating
- Original price
- Discount price
- Discount percentage
- Stock status
- Wishlist
- Quick Add/Add to Cart
- Badges

Interactions:

- image transition
- wishlist feedback
- add-to-cart feedback
- subtle hover movement

No excessive animation.

---

## 20. PRODUCT DETAILS

Include:

- Image gallery
- Zoom where useful
- Product title
- Brand
- Rating
- Review count
- SKU
- Price
- Discount
- Stock
- Variant selection
- Quantity
- Add to Cart
- Buy Now
- Wishlist
- Description
- Specifications
- Shipping information
- Return policy
- Reviews
- Related products
- Recently viewed if practical

---

## 21. SEARCH + FILTER

Search:

- Product name
- Brand
- Category
- SKU
- Search suggestions where useful
- Debounced search

Filters:

- Category
- Brand
- Price
- Rating
- Availability
- Discount
- Attributes

Sort:

- Newest
- Price low-high
- Price high-low
- Popularity
- Rating

Use pagination.

---

## 22. CART + WISHLIST

Cart:

- Add
- Remove
- Quantity
- Variants
- Stock validation
- Subtotal
- Discount
- Delivery
- Total

Guest cart:
localStorage.

Logged-in cart:
database-backed where appropriate.

Merge guest cart after login.

Wishlist:

- Add
- Remove
- View
- Move to cart
- Prevent duplicates

---

## 23. CHECKOUT

Fields:

- Full name
- Phone
- Email
- Address
- City
- Area
- Postal code
- Delivery notes

Show:

- Products
- Quantity
- Subtotal
- Discount
- Delivery charge
- Total

Payment methods:

1. Cash on Delivery
2. Manual bKash
3. Manual Nagad
4. SSLCOMMERZ-ready architecture

---

## 24. MANUAL BKASH / NAGAD

Show:

- Payment method
- Payment number
- Amount
- Instructions
- Transaction ID

Admin can verify:

- Transaction ID
- Amount
- Method
- Status

Payment states:

- Pending
- Paid
- Failed
- Refunded

Never mark manual payment as paid before verification.

---

## 25. SSLCOMMERZ

Create a payment service abstraction so SSLCOMMERZ can be integrated later without rewriting checkout.

Never hardcode payment credentials.

---

## 26. ORDER SYSTEM

Statuses:

- Pending
- Confirmed
- Processing
- Shipped
- Delivered
- Cancelled
- Returned
- Refunded

Each order:

- Order ID
- Customer
- Products
- Variants
- Quantity
- Price
- Discount
- Delivery fee
- Total
- Payment method
- Payment status
- Transaction ID
- Shipping address
- Customer notes
- Admin notes
- Order status
- Created date
- Updated date

---

## 27. DELIVERY

Create configurable delivery zones.

Example:

- Inside Dhaka
- Outside Dhaka

Do NOT permanently hardcode charges.

Admin can configure:

- Zone
- Charge
- Active state
- Minimum order
- Other rules if needed

---

## 28. COUPONS

Fields:

- Code
- Discount type
- Percentage
- Fixed amount
- Minimum order
- Maximum discount
- Expiry
- Usage limit
- Per-user usage limit
- Active/inactive

Validate all rules server-side.

---

## 29. REVIEWS

Only verified purchasers can review purchased products.

Review:

- Rating
- Title if useful
- Comment
- Optional safe image upload
- Verified purchase

Admin:

- Approve
- Reject
- Delete

---

## 30. INVENTORY

Implement:

- Current stock
- Low stock threshold
- Out-of-stock
- Stock adjustments
- Inventory history
- Stock movement
- Variant stock

Prevent overselling.

Use safe stock updates when processing orders.

---

## 31. CUSTOMER ACCOUNT

Account sections:

- Profile
- Personal information
- Password
- Addresses
- Orders
- Wishlist
- Preferences
- Theme

---

## 32. LEGAL / CONTENT

Create editable:

- Terms & Conditions
- Privacy Policy
- Return Policy
- Refund Policy
- Shipping Policy
- Cookie Policy where appropriate

Registration and checkout must include appropriate acceptance/acknowledgment.

Do not invent false legal/compliance claims.

Make business-specific legal content configurable.

---

## 33. DATABASE MODELS

Minimum:

- User
- Product
- Category
- Brand
- Order
- Review
- Coupon
- Cart
- Wishlist
- DeliveryZone

Potential:

- Payment
- Inventory
- Address
- AdminActivity
- SiteSettings
- LegalPage
- Banner
- Notification

Use proper references and indexes.

---

## 34. API ARCHITECTURE

Use:

/api/auth
/api/users
/api/products
/api/categories
/api/brands
/api/orders
/api/reviews
/api/coupons
/api/cart
/api/wishlist
/api/admin
/api/payments
/api/delivery
/api/settings

Separate:

- routes
- controllers
- services
- middleware
- models
- validators
- utilities

Do not put all logic in route files.

---

## 35. SECURITY

Implement:

- Password hashing
- Secure JWT/session handling
- Protected routes
- Backend authorization
- Role permissions
- Input validation
- CORS
- Secure headers where appropriate
- Rate limiting where appropriate
- Upload validation
- Error handling
- Environment variables
- No secret exposure
- Never return passwords
- Safe database queries

Perform a security audit before deployment.

---

## 36. ENVIRONMENT VARIABLES

Create `.env.example`.

Example:

MONGODB_URI=
JWT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

CLIENT_URL=

BKASH_PAYMENT_NUMBER=
NAGAD_PAYMENT_NUMBER=

SSLCOMMERZ_STORE_ID=
SSLCOMMERZ_STORE_PASSWORD=

Never commit `.env`.

---

## 37. SEO

Implement:

- Dynamic titles
- Meta descriptions
- Canonical URLs
- Clean URLs
- Open Graph
- Product structured data
- Sitemap
- Robots.txt
- Semantic HTML

---

## 38. PERFORMANCE

The website must be extremely fast.

Optimize:

- Images
- Modern image formats
- Lazy loading
- Code splitting
- Route loading
- API calls
- Database queries
- Indexes
- React rendering
- Bundle size
- Caching where appropriate

Avoid unnecessary API requests, huge images, huge bundles, and loading all products at once.

Target excellent Lighthouse/Core Web Vitals performance where realistically achievable.

---

## 39. ACCESSIBILITY

Implement:

- Keyboard navigation
- Focus states
- Semantic HTML
- Accessible labels
- Alt text
- Good contrast
- Reduced-motion support
- Accessible modals
- Accessible dropdowns
- Screen-reader-friendly forms

---

## 40. RESPONSIVE DESIGN

Test:

360px
375px
390px
414px
768px
1024px
1280px
1440px
1920px

Must work properly on mobile, tablet, laptop, desktop, and large desktop.

---

## 41. ADMIN UI

Admin should have:

- Sidebar
- Topbar
- Search
- Notifications
- Profile menu
- Theme switch
- Breadcrumbs
- Dashboard cards
- Tables
- Filters
- Forms
- Drawers
- Modals
- Charts
- Pagination
- Bulk actions where useful

Admin must be responsive.

---

## 42. ADMIN ACTIVITY LOG

Implement activity logging for important actions:

- Admin login
- Product create/update/delete
- Order status change
- Payment verification
- Coupon changes
- Customer status changes
- Important settings changes

Log:

- Admin
- Action
- Entity
- Entity ID
- Timestamp
- Relevant metadata

Super Admin can inspect logs.

---

## 43. NOTIFICATIONS

Customer:

- Order created
- Order confirmed
- Order shipped
- Order delivered
- Order cancelled

Admin:

- New order
- Low stock
- New customer
- Pending manual payment
- Important system events

Start with in-app notifications and design for future email/SMS integration.

---

# 44. 30-DAY DEVELOPMENT PLAN

## DAY 1 — Architecture + Setup
- Repository
- Frontend
- Backend
- Folder structure
- Tailwind
- Design tokens
- Theme architecture
- Environment setup
- Git

## DAY 2 — Backend Foundation
- Express
- MongoDB
- Mongoose
- API architecture
- Error handling
- Validation
- Middleware

## DAY 3 — Customer Authentication
- User model
- Register
- Login
- JWT
- Password hashing
- Protected routes

## DAY 4 — Google Authentication
- Google OAuth
- Secure verification
- Account linking
- Auth UI

## DAY 5 — Premium Design System
- Typography
- Colors
- Spacing
- Buttons
- Inputs
- Cards
- Modals
- Light/dark theme
- Theme transition

## DAY 6 — Premium Navigation
- Desktop header
- Mobile header
- Search
- Account
- Wishlist
- Cart
- Theme toggle
- Mobile menu

## DAY 7 — Premium Homepage
- Hero
- Categories
- Featured products
- Best sellers
- Promotions
- Reviews
- Footer

## DAY 8 — Product Backend
- Product model
- Category
- Brand
- APIs
- Validation

## DAY 9 — Product Frontend
- Shop
- Category
- Product cards
- Product details
- Gallery

## DAY 10 — Search + Filters
- Search
- Debounce
- Filters
- Sorting
- Pagination

## DAY 11 — Cart
- Cart
- Local storage
- Database cart
- Cart merge
- Stock validation

## DAY 12 — Wishlist + Customer Account
- Wishlist
- Profile
- Address
- Password
- Preferences

## DAY 13 — Checkout
- Checkout UI
- Address
- Delivery
- Order creation

## DAY 14 — Payments
- COD
- Manual bKash
- Manual Nagad
- Transaction ID
- Payment states

## DAY 15 — Orders
- Order API
- Tracking
- Customer order pages
- Validation

## DAY 16 — Admin Authentication
- Admin login
- Roles
- Permissions
- Protected routes

## DAY 17 — Admin Dashboard
- Statistics
- Charts
- Recent orders
- Recent customers
- Low stock

## DAY 18 — Admin Products
- CRUD
- Cloudinary
- Variants
- Inventory
- SEO

## DAY 19 — Categories + Brands
- Categories
- Subcategories
- Brands
- Images
- SEO

## DAY 20 — Admin Orders
- Order management
- Payment verification
- Status changes
- Notes
- Filters

## DAY 21 — Customer Management
- Customer list
- Customer details
- Customer orders
- Account controls

## DAY 22 — Coupons + Delivery
- Coupon system
- Delivery zones
- Delivery pricing
- Validation

## DAY 23 — Reviews
- Reviews
- Ratings
- Verified purchase
- Admin moderation

## DAY 24 — Admin Logs + Notifications
- Activity logs
- In-app notifications
- Low stock alerts
- Order alerts

## DAY 25 — Legal + Content + Settings
- Terms
- Privacy
- Return
- Refund
- Shipping
- Site settings
- Editable content

## DAY 26 — SEO + Performance
- SEO
- Sitemap
- Robots
- Image optimization
- Lazy loading
- Code splitting
- API optimization
- Database indexes

## DAY 27 — Animation + UX Polish
Audit and improve:
- Page transitions
- Theme transition
- Button animations
- Loading states
- Skeletons
- Modals
- Hover states
- Mobile navigation
- Product interactions

Keep motion subtle.

## DAY 28 — Security + Full QA
Test:
- Customer auth
- Google login
- Authorization
- Products
- Cart
- Checkout
- Payments
- Orders
- Coupons
- Reviews
- Admin
- Inventory
- Responsive layouts

Fix bugs.

## DAY 29 — Deployment
Frontend: Vercel
Backend: Hostinger VPS
Database: MongoDB Atlas
Images: Cloudinary

Configure:
- Production environment
- CORS
- Domain
- HTTPS
- API URL
- Database
- Cloudinary
- Google OAuth
- Production build

## DAY 30 — FINAL PRODUCTION AUDIT
Audit:
- UI
- UX
- Mobile
- Dark mode
- Light mode
- Animations
- Performance
- Accessibility
- SEO
- Authentication
- Google login
- Security
- Database
- API
- Admin
- Orders
- Payments
- Inventory
- Reviews
- Coupons
- Deployment

Prepare:
- README
- Setup guide
- Deployment guide
- Environment variable guide
- API documentation
- Admin guide
- Architecture documentation
- Final QA checklist

---

# 45. GITHUB WORKFLOW

After every major milestone:

git add .
git commit -m "..."
git push

Example commits:

- feat: initialize project architecture
- feat: add authentication
- feat: add Google login
- feat: add premium homepage
- feat: add product system
- feat: add cart and wishlist
- feat: add checkout
- feat: add admin dashboard
- feat: add inventory
- feat: add payment workflow
- fix: resolve checkout validation
- perf: optimize product loading
- security: harden authentication

Never commit secrets.

---

# 46. DAILY WORKFLOW

At the beginning of every day:

1. Inspect existing project.
2. Inspect Git status.
3. Inspect relevant files.
4. Understand existing architecture.
5. Do not overwrite working features unnecessarily.
6. Plan today's work.
7. Implement.
8. Run the project.
9. Test.
10. Fix errors.
11. Check responsive UI.
12. Commit changes.

At the end provide:

### Completed
### Files Created
### Files Modified
### Tests
### Bugs Fixed
### Remaining
### Git Commit
### Next Day

---

# 47. ERROR HANDLING

When something breaks:

1. Identify exact error.
2. Find root cause.
3. Fix it.
4. Run relevant test/build.
5. Confirm the fix.
6. Explain briefly.

Do not simply report an error and stop.

---

# 48. CODING RULES

DO NOT:

- Rewrite the entire project unnecessarily
- Delete working code
- Duplicate components
- Hardcode credentials
- Commit secrets
- Ignore errors
- Skip testing
- Create fake production functionality
- Use unnecessary dependencies
- Copy Samsung/Apple exactly
- Use copyrighted assets without permission
- Over-animate

DO:

- Inspect first
- Plan
- Implement incrementally
- Reuse components
- Keep code modular
- Test
- Optimize
- Preserve working functionality
- Maintain design consistency

---

# 49. FINAL ARCHITECTURE

Customer:

Browser
↓
Vercel React Frontend
↓
REST API
↓
Hostinger Node/Express Backend
↓
MongoDB Atlas

Additional:

Frontend → Cloudinary
Frontend/Auth → Google OAuth
Backend → Payment Services

Admin:

Admin Browser
↓
Separate Admin UI
↓
Protected REST API
↓
Role/Permission Middleware
↓
MongoDB Atlas

---

# 50. FINAL PRODUCTION CHECK

Before declaring completion, verify:

- No broken routes
- No console errors
- No exposed secrets
- No localhost production references
- No broken images
- No broken API calls
- No obvious mobile issues
- Dark mode works
- Light mode works
- Theme switch is smooth
- Animations are subtle
- Loading states work
- Authentication works
- Google login works
- Admin/customer separation works
- Permissions work
- Orders work
- Payments work
- Inventory works
- Reviews work
- Coupons work
- SEO basics work
- Production build succeeds

---

# 51. MOST IMPORTANT INSTRUCTION

Do NOT try to complete all 30 days in one response.

When I say:

START DAY 1

Only work on Day 1.

When I say:

START DAY 2

First inspect the existing project and continue from the actual current codebase.

Never assume previous work exists without checking files.

Always follow:

INSPECT → PLAN → IMPLEMENT → TEST → FIX → COMMIT → SUMMARIZE

If the project is partially implemented, adapt instead of rebuilding it.

---

# 52. START CONDITION

After receiving this master prompt:

DO NOT start coding immediately.

First respond with:

1. Confirmation that you understand the project.
2. Final architecture.
3. Recommended folder structure.
4. Design system strategy.
5. Authentication strategy.
6. Admin/customer separation strategy.
7. Database model overview.
8. 30-day roadmap summary.
9. Required external accounts/services.
10. Important decisions that should be finalized before Day 1.

Then wait for:

START DAY 1
