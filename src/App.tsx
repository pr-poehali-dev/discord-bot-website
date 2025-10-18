
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import FamilyBot from "./pages/FamilyBot";
import TournamentBot from "./pages/TournamentBot";
import TournamentAccounts from "./pages/TournamentAccounts";
import TournamentServers from "./pages/TournamentServers";
import TournamentTasks from "./pages/TournamentTasks";
import Bots from "./pages/Bots";
import Changelog from "./pages/Changelog";
import Contacts from "./pages/Contacts";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/family-bot" element={<FamilyBot />} />
          <Route path="/tournament-bot" element={<TournamentBot />} />
          <Route path="/tournament-accounts" element={<TournamentAccounts />} />
          <Route path="/tournament-servers" element={<TournamentServers />} />
          <Route path="/tournament-tasks" element={<TournamentTasks />} />
          <Route path="/bots" element={<Bots />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;