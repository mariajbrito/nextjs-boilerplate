import React, { lazy, Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import ScrollToTop from '@/components/ScrollToTop';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import ErrorBoundary from '@/components/ErrorBoundary';

// HomePage carregada eagerly para melhor FCP
import HomePage from '@/pages/HomePage';

// Lazy loading de todas as outras páginas para code splitting
const ProductsHubPage = lazy(() => import('@/pages/products/ProductsHubPage'));
const SolamagicPage = lazy(() => import('@/pages/products/SolamagicPage'));
const ComfortSunPage = lazy(() => import('@/pages/products/ComfortSunPage'));
const ComfortSunProfessionalPage = lazy(() => import('@/pages/products/ComfortSunProfessionalPage'));
const ComfortSunDeluxePage = lazy(() => import('@/pages/products/ComfortSunDeluxePage'));
const ComfortSunEspecializadoPage = lazy(() => import('@/pages/products/ComfortSunEspecializadoPage'));
const ComfortSunPolivalentePage = lazy(() => import('@/pages/products/ComfortSunPolivalentePage'));
const DuothermPage = lazy(() => import('@/pages/products/DuothermPage'));
const ClimateCoatingPage = lazy(() => import('@/pages/products/ClimateCoatingPage'));
const DrymatPage = lazy(() => import('@/pages/products/DrymatPage'));
const BioclimatizadoresPage = lazy(() => import('@/pages/products/BioclimatizadoresPage'));
const EcoFireplacesPage = lazy(() => import('@/pages/products/EcoFireplacesPage'));
const EsquentadoresPage = lazy(() => import('@/pages/products/EsquentadoresPage'));
const PisoRadiantePage = lazy(() => import('@/pages/products/PisoRadiantePage'));

const SolutionsHubPage = lazy(() => import('@/pages/solutions/SolutionsHubPage'));
const EliminateWallMoisturePage = lazy(() => import('@/pages/solutions/EliminateWallMoisturePage'));
const ReduceHeatingCostsPage = lazy(() => import('@/pages/solutions/ReduceHeatingCostsPage'));
const OutdoorComfortPage = lazy(() => import('@/pages/solutions/OutdoorComfortPage'));
const SustainableBusinessPage = lazy(() => import('@/pages/solutions/SustainableBusinessPage'));
const ArrefecimentoNaturalPage = lazy(() => import('@/pages/solutions/ArrefecimentoNaturalPage'));

const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const RealEstatePage = lazy(() => import('@/pages/RealEstatePage'));
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'));
const FAQPage = lazy(() => import('@/pages/FAQPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

function PageLoader() {
  return (
    <div
      className="flex-grow flex items-center justify-center min-h-[50vh]"
      aria-busy="true"
      aria-label="A carregar..."
    >
      <div className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: 'var(--primary, #FF8C00)', borderTopColor: 'transparent' }} />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ErrorBoundary>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <a href="#main-content" className="skip-to-content">Saltar para o conteúdo</a>
            <Header />
            <main id="main-content" className="flex-grow" style={{ paddingTop: '64px' }}>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />

                  <Route path="/products" element={<ProductsHubPage />} />
                  <Route path="/products/solamagic" element={<SolamagicPage />} />
                  <Route path="/products/comfortsun" element={<ComfortSunPage />} />
                  <Route path="/products/comfortsun/professional" element={<ComfortSunProfessionalPage />} />
                  <Route path="/products/comfortsun/deluxe" element={<ComfortSunDeluxePage />} />
                  <Route path="/products/comfortsun/especializado" element={<ComfortSunEspecializadoPage />} />
                  <Route path="/products/comfortsun/polivalente" element={<ComfortSunPolivalentePage />} />
                  <Route path="/products/duotherm" element={<DuothermPage />} />
                  <Route path="/products/climatecoating" element={<ClimateCoatingPage />} />
                  <Route path="/products/drymat" element={<DrymatPage />} />
                  <Route path="/products/bioclimatizadores" element={<BioclimatizadoresPage />} />
                  <Route path="/products/eco-fireplaces" element={<EcoFireplacesPage />} />
                  <Route path="/products/esquentadores" element={<EsquentadoresPage />} />
                  <Route path="/products/painel-aht" element={<Navigate to="/products/duotherm" replace />} />
                  <Route path="/products/piso-radiante" element={<PisoRadiantePage />} />

                  <Route path="/solutions" element={<SolutionsHubPage />} />
                  <Route path="/solutions/eliminate-moisture" element={<EliminateWallMoisturePage />} />
                  <Route path="/solutions/reduce-heating-costs" element={<ReduceHeatingCostsPage />} />
                  <Route path="/solutions/outdoor-comfort" element={<OutdoorComfortPage />} />
                  <Route path="/solutions/sustainable-business" element={<SustainableBusinessPage />} />
                  <Route path="/solutions/natural-cooling" element={<ArrefecimentoNaturalPage />} />

                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/real-estate" element={<RealEstatePage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/faqs" element={<FAQPage />} />

                  {/* 404 deve ser sempre a última rota */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <CookieBanner />
          </div>
        </ErrorBoundary>
      </Router>
    </LanguageProvider>
  );
}

export default App;
