#!/bin/bash
echo "=== Self-Validation ==="
ERRORS=0

# 1. Check for hardcoded English strings in components (should use translations)
echo "Checking for hardcoded strings in components..."
HARDCODED=$(grep -rn '"[A-Z][a-z].*"' src/components/ --include="*.tsx" | grep -v "import\|from\|//\|className\|href\|src=\|alt=\|type=\|placeholder\|key=\|value=\|mode=\|Blitzone\|credit\|PayPal\|contact@" | head -20)
if [ -n "$HARDCODED" ]; then
  echo "⚠️ Possible hardcoded strings (review manually):"
  echo "$HARDCODED"
else
  echo "✅ No obvious hardcoded strings found"
fi

# 2. Check provider order in layout.tsx
echo ""
echo "Checking provider order..."
PROVIDERS=$(grep -n "Provider" src/app/layout.tsx)
echo "$PROVIDERS"

# 3. Check all route files exist
echo ""
echo "Checking route files..."
for route in "src/app/page.tsx" "src/app/layout.tsx" "src/app/cart/page.tsx" "src/app/checkout/page.tsx" "src/app/about/page.tsx" "src/app/contact/page.tsx" "src/app/account/page.tsx" "src/app/account/signin/page.tsx" "src/app/account/signup/page.tsx" "src/app/policy/[slug]/page.tsx" "src/app/coming-soon/[slug]/page.tsx"; do
  if [ ! -f "$route" ]; then
    echo "❌ Missing: $route"
    ERRORS=$((ERRORS + 1))
  else
    echo "✅ Found: $route"
  fi
done

# 4. Check no href="#" in Footer
echo ""
echo "Checking for dead links..."
DEADLINKS=$(grep -n 'href="#"' src/components/Footer.tsx 2>/dev/null)
if [ -n "$DEADLINKS" ]; then
  echo "❌ Found href='#' in Footer:"
  echo "$DEADLINKS"
  ERRORS=$((ERRORS + 1))
else
  echo "✅ No dead links in Footer"
fi

# 5. Check translations.ts has both en and ja
echo ""
echo "Checking translations..."
if grep -q "ja:" src/lib/translations.ts; then
  echo "✅ Japanese translations present"
else
  echo "❌ Missing Japanese translations"
  ERRORS=$((ERRORS + 1))
fi

# 6. Check next.config.js has unoptimized: true
echo ""
echo "Checking next.config.js..."
if grep -q "unoptimized: true" next.config.js; then
  echo "✅ unoptimized: true present"
else
  echo "❌ Missing unoptimized: true in next.config.js"
  ERRORS=$((ERRORS + 1))
fi

# 7. Check game-slug page exists
echo ""
echo "Checking game slug page..."
if [ -f "src/app/[game-slug]/page.tsx" ]; then
  echo "✅ Game slug page exists"
else
  echo "❌ Missing game slug page"
  ERRORS=$((ERRORS + 1))
fi

# 8. Check all component files exist
echo ""
echo "Checking component files..."
for comp in Header Footer GameCard HeroBanner TrustBadges HowItWorks PaymentMethods ServiceCard CartIcon CartItemRow CheckoutForm ContactForm AuthForm CurrencyDropdown LanguageSwitcher ChatWidget; do
  if [ ! -f "src/components/${comp}.tsx" ]; then
    echo "❌ Missing: src/components/${comp}.tsx"
    ERRORS=$((ERRORS + 1))
  fi
done
echo "✅ All component files checked"

# 9. Check lib files
echo ""
echo "Checking lib files..."
for lib in currency language cart auth translations data policies; do
  if [ ! -f "src/lib/${lib}.tsx" ] && [ ! -f "src/lib/${lib}.ts" ]; then
    echo "❌ Missing: src/lib/${lib}"
    ERRORS=$((ERRORS + 1))
  fi
done
echo "✅ All lib files checked"

echo ""
echo "=== $ERRORS issues found ==="
if [ $ERRORS -eq 0 ]; then
  echo "✅ All self-validation checks passed. Ready for preview."
else
  echo "❌ Fix the issues above before proceeding."
fi
