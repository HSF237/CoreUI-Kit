import UpcomingFeaturesCard from "../components/registry/interactive/UpcomingFeaturesCard.jsx";
import upcomingFeaturesSource from "../components/registry/interactive/UpcomingFeaturesCard.jsx?raw";
import TransactionExchangeOverview from "../components/registry/fintech/TransactionExchangeOverview.jsx";
import transactionOverviewSource from "../components/registry/fintech/TransactionExchangeOverview.jsx?raw";
import ResponsiveSidebarNavigation from "../components/registry/dashboard/ResponsiveSidebarNavigation.jsx";
import sidebarNavigationSource from "../components/registry/dashboard/ResponsiveSidebarNavigation.jsx?raw";

import PremiumWalletCard from "../components/registry/fintech/PremiumWalletCard.jsx";
import premiumWalletSource from "../components/registry/fintech/PremiumWalletCard.jsx?raw";
import PaymentMethodStack from "../components/registry/fintech/PaymentMethodStack.jsx";
import paymentMethodSource from "../components/registry/fintech/PaymentMethodStack.jsx?raw";
import RevenueMetricCard from "../components/registry/fintech/RevenueMetricCard.jsx";
import revenueMetricSource from "../components/registry/fintech/RevenueMetricCard.jsx?raw";
import InvoiceStatusPanel from "../components/registry/fintech/InvoiceStatusPanel.jsx";
import invoiceStatusSource from "../components/registry/fintech/InvoiceStatusPanel.jsx?raw";

import AnalyticsCommandCenter from "../components/registry/dashboard/AnalyticsCommandCenter.jsx";
import analyticsCommandSource from "../components/registry/dashboard/AnalyticsCommandCenter.jsx?raw";
import ActivityTimeline from "../components/registry/dashboard/ActivityTimeline.jsx";
import activityTimelineSource from "../components/registry/dashboard/ActivityTimeline.jsx?raw";
import DataTablePro from "../components/registry/dashboard/DataTablePro.jsx";
import dataTableSource from "../components/registry/dashboard/DataTablePro.jsx?raw";
import SystemHealthPanel from "../components/registry/dashboard/SystemHealthPanel.jsx";
import systemHealthSource from "../components/registry/dashboard/SystemHealthPanel.jsx?raw";

import BentoFeatureGrid from "../components/registry/interactive/BentoFeatureGrid.jsx";
import bentoFeatureSource from "../components/registry/interactive/BentoFeatureGrid.jsx?raw";
import NotificationCenter from "../components/registry/interactive/NotificationCenter.jsx";
import notificationCenterSource from "../components/registry/interactive/NotificationCenter.jsx?raw";
import PricingTierCard from "../components/registry/interactive/PricingTierCard.jsx";
import pricingTierSource from "../components/registry/interactive/PricingTierCard.jsx?raw";
import CommandPalette from "../components/registry/interactive/CommandPalette.jsx";
import commandPaletteSource from "../components/registry/interactive/CommandPalette.jsx?raw";

import MagneticActionButtons from "../components/registry/buttons/MagneticActionButtons.jsx";
import magneticButtonsSource from "../components/registry/buttons/MagneticActionButtons.jsx?raw";
import SegmentedControl from "../components/registry/buttons/SegmentedControl.jsx";
import segmentedControlSource from "../components/registry/buttons/SegmentedControl.jsx?raw";
import GradientIconButtons from "../components/registry/buttons/GradientIconButtons.jsx";
import gradientButtonsSource from "../components/registry/buttons/GradientIconButtons.jsx?raw";
import FloatingActionDock from "../components/registry/buttons/FloatingActionDock.jsx";
import floatingDockSource from "../components/registry/buttons/FloatingActionDock.jsx?raw";

import LoadingStatusPanel from "../components/registry/loaders/LoadingStatusPanel.jsx";
import loadingStatusSource from "../components/registry/loaders/LoadingStatusPanel.jsx?raw";
import MultiStepProgress from "../components/registry/loaders/MultiStepProgress.jsx";
import multiStepSource from "../components/registry/loaders/MultiStepProgress.jsx?raw";
import CircularProgressStats from "../components/registry/loaders/CircularProgressStats.jsx";
import circularProgressSource from "../components/registry/loaders/CircularProgressStats.jsx?raw";
import SkeletonDashboard from "../components/registry/loaders/SkeletonDashboard.jsx";
import skeletonDashboardSource from "../components/registry/loaders/SkeletonDashboard.jsx?raw";

import SmartLoginPanel from "../components/registry/forms/SmartLoginPanel.jsx";
import smartLoginSource from "../components/registry/forms/SmartLoginPanel.jsx?raw";
import ProfileSettingsForm from "../components/registry/forms/ProfileSettingsForm.jsx";
import profileSettingsSource from "../components/registry/forms/ProfileSettingsForm.jsx?raw";
import SearchFilterBar from "../components/registry/forms/SearchFilterBar.jsx";
import searchFilterSource from "../components/registry/forms/SearchFilterBar.jsx?raw";
import FileUploadDropzone from "../components/registry/forms/FileUploadDropzone.jsx";
import fileUploadSource from "../components/registry/forms/FileUploadDropzone.jsx?raw";

export const categories = [
  { id: "fintech", label: "Fintech Blocks" },
  { id: "dashboard", label: "Dashboards" },
  { id: "interactive", label: "Interactive Sections" },
  { id: "buttons", label: "Buttons & Actions" },
  { id: "loaders", label: "Loaders & Progress" },
  { id: "forms", label: "Forms & Inputs" },
];

export const registryItems = [
  { slug:"transaction-exchange-overview", title:"Transaction & Exchange Overview", description:"Treasury overview with balances, streams and live rate movement.", category:"fintech", path:"src/components/registry/fintech/TransactionExchangeOverview.jsx", component:TransactionExchangeOverview, source:transactionOverviewSource, tags:["Fintech","Data UI","Responsive"] },
  { slug:"premium-wallet-card", title:"Premium Wallet Card", description:"High-end digital wallet with balance, virtual card and quick actions.", category:"fintech", path:"src/components/registry/fintech/PremiumWalletCard.jsx", component:PremiumWalletCard, source:premiumWalletSource, tags:["Wallet","Fintech","Glass"] },
  { slug:"payment-method-stack", title:"Payment Method Stack", description:"Checkout selector for cards, bank accounts and mobile wallets.", category:"fintech", path:"src/components/registry/fintech/PaymentMethodStack.jsx", component:PaymentMethodStack, source:paymentMethodSource, tags:["Payments","Checkout","Selection"] },
  { slug:"revenue-metric-card", title:"Revenue Metric Card", description:"Executive revenue card with trend bars and SaaS metrics.", category:"fintech", path:"src/components/registry/fintech/RevenueMetricCard.jsx", component:RevenueMetricCard, source:revenueMetricSource, tags:["Revenue","Metrics","Chart"] },
  { slug:"invoice-status-panel", title:"Invoice Status Panel", description:"Billing activity with client, amount, status and document actions.", category:"fintech", path:"src/components/registry/fintech/InvoiceStatusPanel.jsx", component:InvoiceStatusPanel, source:invoiceStatusSource, tags:["Invoices","Billing","Status"] },

  { slug:"responsive-sidebar-navigation", title:"Responsive Sidebar Navigation", description:"Collapsible desktop navigation with a mobile overlay and active workspace state.", category:"dashboard", path:"src/components/registry/dashboard/ResponsiveSidebarNavigation.jsx", component:ResponsiveSidebarNavigation, source:sidebarNavigationSource, tags:["Dashboard","Navigation","Responsive"] },
  { slug:"analytics-command-center", title:"Analytics Command Center", description:"Executive dashboard combining KPIs, trend bars and goal completion.", category:"dashboard", path:"src/components/registry/dashboard/AnalyticsCommandCenter.jsx", component:AnalyticsCommandCenter, source:analyticsCommandSource, tags:["Dashboard","Analytics","KPI"] },
  { slug:"activity-timeline", title:"Activity Timeline", description:"Live product activity feed for releases, reviews, members and comments.", category:"dashboard", path:"src/components/registry/dashboard/ActivityTimeline.jsx", component:ActivityTimeline, source:activityTimelineSource, tags:["Timeline","Activity","Feed"] },
  { slug:"data-table-pro", title:"Data Table Pro", description:"Responsive account table with filters, search, plans and status chips.", category:"dashboard", path:"src/components/registry/dashboard/DataTablePro.jsx", component:DataTablePro, source:dataTableSource, tags:["Table","Admin","Customers"] },
  { slug:"system-health-panel", title:"System Health Panel", description:"Operational service cards with uptime metrics and miniature graphs.", category:"dashboard", path:"src/components/registry/dashboard/SystemHealthPanel.jsx", component:SystemHealthPanel, source:systemHealthSource, tags:["Status","Operations","Monitoring"] },

  { slug:"upcoming-features-card", title:"Glassmorphic Upcoming Features", description:"Product roadmap surface with glass layers, statuses and progress.", category:"interactive", path:"src/components/registry/interactive/UpcomingFeaturesCard.jsx", component:UpcomingFeaturesCard, source:upcomingFeaturesSource, tags:["Glassmorphism","Roadmap","Interactive"] },
  { slug:"bento-feature-grid", title:"Bento Feature Grid", description:"Asymmetric premium feature grid for modern product landing pages.", category:"interactive", path:"src/components/registry/interactive/BentoFeatureGrid.jsx", component:BentoFeatureGrid, source:bentoFeatureSource, tags:["Bento","Marketing","Features"] },
  { slug:"notification-center", title:"Notification Center", description:"Compact notification inbox with unread states and action-ready rows.", category:"interactive", path:"src/components/registry/interactive/NotificationCenter.jsx", component:NotificationCenter, source:notificationCenterSource, tags:["Notifications","Inbox","Activity"] },
  { slug:"pricing-tier-card", title:"Pricing Tier Card", description:"Conversion-focused premium pricing block with benefits and gradient CTA.", category:"interactive", path:"src/components/registry/interactive/PricingTierCard.jsx", component:PricingTierCard, source:pricingTierSource, tags:["Pricing","SaaS","CTA"] },
  { slug:"command-palette", title:"Command Palette", description:"Keyboard-first quick action surface inspired by modern developer tools.", category:"interactive", path:"src/components/registry/interactive/CommandPalette.jsx", component:CommandPalette, source:commandPaletteSource, tags:["Command","Search","Productivity"] },

  { slug:"magnetic-action-buttons", title:"Premium Action Buttons", description:"Tactile primary, gradient, ghost and deployment actions.", category:"buttons", path:"src/components/registry/buttons/MagneticActionButtons.jsx", component:MagneticActionButtons, source:magneticButtonsSource, tags:["Buttons","CTA","Hover"] },
  { slug:"segmented-control", title:"Segmented Control", description:"Compact display-mode selector with strong active and inactive states.", category:"buttons", path:"src/components/registry/buttons/SegmentedControl.jsx", component:SegmentedControl, source:segmentedControlSource, tags:["Control","Tabs","Selection"] },
  { slug:"gradient-icon-buttons", title:"Gradient Icon Buttons", description:"Bright icon actions for social, messaging, favorites and quick tools.", category:"buttons", path:"src/components/registry/buttons/GradientIconButtons.jsx", component:GradientIconButtons, source:gradientButtonsSource, tags:["Icons","Gradient","Actions"] },
  { slug:"floating-action-dock", title:"Floating Action Dock", description:"Floating action bar with a dominant center CTA.", category:"buttons", path:"src/components/registry/buttons/FloatingActionDock.jsx", component:FloatingActionDock, source:floatingDockSource, tags:["Dock","Navigation","Actions"] },

  { slug:"loading-status-panel", title:"Loading Status Panel", description:"Deployment-style progress panel with completed, active and waiting steps.", category:"loaders", path:"src/components/registry/loaders/LoadingStatusPanel.jsx", component:LoadingStatusPanel, source:loadingStatusSource, tags:["Loading","Deployment","Progress"] },
  { slug:"multi-step-progress", title:"Multi-Step Progress", description:"Polished onboarding and checkout stepper with clear state transitions.", category:"loaders", path:"src/components/registry/loaders/MultiStepProgress.jsx", component:MultiStepProgress, source:multiStepSource, tags:["Stepper","Onboarding","Progress"] },
  { slug:"circular-progress-stats", title:"Circular Progress Stats", description:"Conic progress indicators for utilization and completion metrics.", category:"loaders", path:"src/components/registry/loaders/CircularProgressStats.jsx", component:CircularProgressStats, source:circularProgressSource, tags:["Progress","Metrics","Circular"] },
  { slug:"skeleton-dashboard", title:"Skeleton Dashboard", description:"Dashboard-shaped loading skeleton with stat and chart placeholders.", category:"loaders", path:"src/components/registry/loaders/SkeletonDashboard.jsx", component:SkeletonDashboard, source:skeletonDashboardSource, tags:["Skeleton","Loading","Dashboard"] },

  { slug:"smart-login-panel", title:"Smart Login Panel", description:"Premium authentication surface with email, password and GitHub entry points.", category:"forms", path:"src/components/registry/forms/SmartLoginPanel.jsx", component:SmartLoginPanel, source:smartLoginSource, tags:["Auth","Login","Form"] },
  { slug:"profile-settings-form", title:"Profile Settings Form", description:"Account settings form with avatar, identity and bio editing.", category:"forms", path:"src/components/registry/forms/ProfileSettingsForm.jsx", component:ProfileSettingsForm, source:profileSettingsSource, tags:["Settings","Profile","Form"] },
  { slug:"search-filter-bar", title:"Search & Filter Bar", description:"Advanced filtering surface for project and dataset browsing.", category:"forms", path:"src/components/registry/forms/SearchFilterBar.jsx", component:SearchFilterBar, source:searchFilterSource, tags:["Search","Filters","Input"] },
  { slug:"file-upload-dropzone", title:"File Upload Dropzone", description:"Drag-and-drop upload surface with uploaded-file states.", category:"forms", path:"src/components/registry/forms/FileUploadDropzone.jsx", component:FileUploadDropzone, source:fileUploadSource, tags:["Upload","Files","Form"] },
];
