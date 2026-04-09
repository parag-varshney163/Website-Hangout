import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import SafetyConsentSection from './components/SafetyConsentSection';
import CommunityGuidelines from './components/CommunityGuidelines';
import ChildSafetyPolicy from './components/ChildSafetyPolicy';
import DownloadSection from './components/DownloadSection';
import PrivacyPolicy from './components/PrivacyPolicy';
import WhyChatSpark from './components/WhyChatSpark';
import RefundPolicy from './components/RefundPolicy';
import HeroSection from './components/HeroSection';
import DeletionPolicy from './components/deletion'; // ✅ IMPORTANT
import TermsOfUse from './components/TermsOfUse';
import JoinUs from './components/JoinUs';
import Header from './components/Header';
import ROUTES from './constants/Routes';
import colors from './constants/colors';
import FAQ from './components/FAQ';


function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          background: colors.gradientVertical,
          minHeight: "100vh",
          width: "100%",          // ✅ fixed typo (Width → width)
          overflowX: "hidden",
        }}
      >
        {/* Header visible on all pages */}
        <Header />

        <Routes>
          {/* HOME */}
          <Route
            path={ROUTES.ROOT}
            element={
              <>
                <HeroSection />
                <WhyChatSpark />
                <SafetyConsentSection />
                <DownloadSection />
              </>
            }
          />

          {/* STATIC PAGES */}
          <Route path={ROUTES.FAQ} element={<FAQ />} />
          <Route path={ROUTES.REFUND_POLICY} element={<RefundPolicy />} />
          <Route path={ROUTES.COMMUNITY_GUIDELINES} element={<CommunityGuidelines />} />
          <Route path={ROUTES.TERMS_OF_USE} element={<TermsOfUse />} />
          <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
          <Route path={ROUTES.JOIN_US} element={<JoinUs />} />

          {/* ✅ ACCOUNT DELETION (PLAY STORE REQUIRED) */}
          <Route path="/deletion" element={<DeletionPolicy />} />
          <Route path='/child-safety' element={<ChildSafetyPolicy/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// import './App.css';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import React from 'react';

// import SafetyConsentSection from './components/SafetyConsentSection';
// import CommunityGuidelines from './components/CommunityGuidelines';
// import DownloadSection from './components/DownloadSection';
// import PrivacyPolicy from './components/PrivacyPolicy';
// import WhyChatSpark from './components/WhyChatSpark';
// import RefundPolicy from './components/RefundPolicy';
// import HeroSection from './components/HeroSection';
// import TermsOfUse from './components/TermsOfUse';
// import JoinUs from './components/JoinUs';
// import Header from './components/Header';
// import ROUTES from './constants/Routes';
// import colors from './constants/colors';
// import FAQ from './components/FAQ';


// function App() {
//   return (
//     <BrowserRouter>
//       <div style={{ background: colors.gradientVertical, minHeight: "100vh",Width:"100%",overflowX:"hidden" }}>
        
//         {/* Header will remain on all pages */}
//         <Header />

//         <Routes>
//           {/* HOME PAGE */}
//           <Route
//             path={ROUTES.ROOT}
//             element={
//               <>
//                 <HeroSection />
//                 <WhyChatSpark />
//                 <SafetyConsentSection />
//                 <DownloadSection />
//               </>
//             }
//           />

//           {/* FAQ PAGE */}
//           <Route path={ROUTES.FAQ} element={<FAQ />} />
//           <Route path={ROUTES.REFUND_POLICY} element={<RefundPolicy/>}/>
//           <Route path={ROUTES.COMMUNITY_GUIDELINES} element={<CommunityGuidelines/>}/>
//           <Route path={ROUTES.TERMS_OF_USE} element={<TermsOfUse/>}/>
//           <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy/>}/>
//           <Route path={ROUTES.JOIN_US} element={<JoinUs/>}/>
//         </Routes>

//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
