import React from 'react';
import { ConvertelleProvider, useConvertelle } from './context/ConvertelleContext';

// Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Toast from './components/Toast';

// Overlays
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import QuickViewModal from './components/QuickViewModal';
import ProductComparisonModal from './components/ProductComparisonModal';
import CheckoutModal from './components/CheckoutModal';
import SearchModal from './components/SearchModal';
import ElleAIChatbot from './components/ElleAIChatbot';

// Pages
import ForestHome from './components/ForestHome';
import ShopCatalog from './components/ShopCatalog';
import ProductDetailPage from './components/ProductDetailPage';
import AnimalCollectionPage from './components/AnimalCollectionPage';
import TransformationStudio from './components/TransformationStudio';
import AnimalIdentityQuiz from './components/AnimalIdentityQuiz';
import ForestDiscovery from './components/ForestDiscovery';
import JournalPage from './components/JournalPage';

function AppContent() {
  const { currentView } = useConvertelle();

  const renderView = () => {
    switch (currentView) {
      case 'shop':        return <ShopCatalog />;
      case 'product-detail': return <ProductDetailPage />;
      case 'animal':     return <AnimalCollectionPage />;
      case 'studio':     return <TransformationStudio />;
      case 'quiz':       return <AnimalIdentityQuiz />;
      case 'forest':     return <ForestDiscovery />;
      case 'journal':    return <JournalPage />;
      case 'home':
      default:           return <ForestHome />;
    }
  };

  return (
    <div className="min-h-screen bg-[#060C05] text-[#E8E4DC] font-sans selection:bg-[#B89047]/60 selection:text-white relative">
      <CustomCursor />
      <Navbar />
      <div className={currentView === 'home' ? '' : 'pt-16 sm:pt-20'}>
        {renderView()}
      </div>
      {currentView !== 'home' && <Footer />}

      {/* Global Overlays */}
      <CartDrawer />
      <WishlistDrawer />
      <QuickViewModal />
      <ProductComparisonModal />
      <CheckoutModal />
      <SearchModal />
      <ElleAIChatbot />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <ConvertelleProvider>
      <AppContent />
    </ConvertelleProvider>
  );
}
