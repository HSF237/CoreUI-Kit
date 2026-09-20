import UpcomingFeaturesCard from "../components/registry/interactive/UpcomingFeaturesCard.jsx";
import upcomingFeaturesSource from "../components/registry/interactive/UpcomingFeaturesCard.jsx?raw";

import TransactionExchangeOverview from "../components/registry/fintech/TransactionExchangeOverview.jsx";
import transactionOverviewSource from "../components/registry/fintech/TransactionExchangeOverview.jsx?raw";

import ResponsiveSidebarNavigation from "../components/registry/dashboard/ResponsiveSidebarNavigation.jsx";
import sidebarNavigationSource from "../components/registry/dashboard/ResponsiveSidebarNavigation.jsx?raw";

export const categories = [
  { id: "fintech", label: "Fintech Blocks" },
  { id: "dashboard", label: "Dashboard Elements" },
  { id: "interactive", label: "Interactive Sections" },
];

export const registryItems = [
  {
    slug: "transaction-exchange-overview",
    title: "Transaction & Exchange Overview",
    description: "A treasury-style overview with asset streams, balances, currency values, and positive or negative rate trends.",
    category: "fintech",
    path: "src/components/registry/fintech/TransactionExchangeOverview.jsx",
    component: TransactionExchangeOverview,
    source: transactionOverviewSource,
    tags: ["Fintech", "Responsive", "Data UI"],
  },
  {
    slug: "responsive-sidebar-navigation",
    title: "Responsive Sidebar Navigation",
    description: "An elegant application sidebar with desktop collapse behavior, mobile overlay navigation, and styled icon placement.",
    category: "dashboard",
    path: "src/components/registry/dashboard/ResponsiveSidebarNavigation.jsx",
    component: ResponsiveSidebarNavigation,
    source: sidebarNavigationSource,
    tags: ["Dashboard", "Navigation", "Responsive"],
  },
  {
    slug: "upcoming-features-card",
    title: "Glassmorphic Upcoming Features",
    description: "A roadmap card with backdrop blur, hover micro-interactions, progress states, and status badges.",
    category: "interactive",
    path: "src/components/registry/interactive/UpcomingFeaturesCard.jsx",
    component: UpcomingFeaturesCard,
    source: upcomingFeaturesSource,
    tags: ["Glassmorphism", "Roadmap", "Micro-interactions"],
  },
];
