// import React, { useState, useEffect } from 'react';
// import { Shield, AlertTriangle, Search, Image as ImageIcon, CheckCircle, FileCode, ExternalLink, Activity, Terminal } from 'lucide-react';

// /**
//  * BUG HUNTER - PRO DASHBOARD
//  * Tech Stack: React + Tailwind CSS + Lucide Icons
//  */

// const App = () => {
//   const [target, setTarget] = useState('');
//   const [isScanning, setIsScanning] = useState(false);
//   const [findings, setFindings] = useState([]); // Java se aane wala data yahan store hoga

//   // Simulation: Java JSON data load karna
//   useEffect(() => {
//     // Ye data baad mein "reports/report.json" se aayega
//     const mockFindings = [
//       { id: 1, name: 'SQL Injection', severity: 'CRITICAL', location: 'auth.java : Line 88', status: 'Open' },
//       { id: 2, name: 'XSS Vulnerability', severity: 'HIGH', location: 'login_form_url', status: 'In-Progress' },
//       { id: 3, name: 'Broken Authentication', severity: 'CRITICAL', location: 'session_manager.py', status: 'Open' },
//     ];
//     setFindings(mockFindings);
//   }, []);

//   const startScan = () => {
//     if (!target) return alert("Kripya URL ya Folder Path daalein!");
//     setIsScanning(true);
//     // Yahan Python engine ko trigger karne ka call jayega
//     setTimeout(() => setIsScanning(false), 5000); 
//   };

//   return (
//     <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans p-6">
      
//       {/* --- TOP BAR: Logo & Search --- */}
//       <nav className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur-md">
//         <div className="flex items-center gap-3">
//           <div className="bg-blue-600 p-2 rounded-lg">
//             <Shield className="w-8 h-8 text-white" />
//           </div>
//           <div>
//             <h1 className="text-2xl font-black tracking-tighter text-white">BUG HUNTER <span className="text-blue-500">PRO</span></h1>
//             <p className="text-xs text-slate-400 font-mono">V.2.0 - Hybrid Security Engine</p>
//           </div>
//         </div>

//         <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 p-2 rounded-xl w-full md:w-[500px]">
//           <Search className="w-5 h-5 text-slate-500 ml-2" />
//           <input 
//             type="text" 
//             placeholder="URL daalein ya Folder ka path..." 
//             className="bg-transparent border-none outline-none flex-1 px-3 text-sm"
//             value={target}
//             onChange={(e) => setTarget(e.target.value)}
//           />
//           <button 
//             onClick={startScan}
//             className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${isScanning ? 'bg-slate-700 animate-pulse' : 'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/20'}`}
//           >
//             {isScanning ? 'SCANNING...' : 'LAUNCH SCAN'}
//           </button>
//         </div>
//       </nav>

//       {/* --- STATS SECTION --- */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
//         <StatCard title="Bugs Found" value={findings.length} icon={AlertTriangle} color="text-yellow-400" border="border-yellow-500/20" />
//         <StatCard title="Critical" value="2" icon={Shield} color="text-red-500" border="border-red-500/20" />
//         <StatCard title="Scanned Files" value="156" icon={FileCode} color="text-blue-400" border="border-blue-500/20" />
//         <StatCard title="Engine Status" value="Online" icon={Activity} color="text-green-400" border="border-green-500/20" />
//       </div>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
//         {/* --- FINDINGS TABLE --- */}
//         <div className="lg:col-span-2 bg-slate-800/40 border border-slate-700 rounded-3xl overflow-hidden backdrop-blur-sm">
//           <div className="p-6 border-b border-slate-700 flex justify-between items-center bg-slate-800/20">
//             <h2 className="font-bold flex items-center gap-2 text-lg">
//               <Terminal className="w-5 h-5 text-blue-400" /> Vulnerability Report
//             </h2>
//             <span className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">Live Sync Enabled</span>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full text-left">
//               <thead className="text-slate-500 text-xs uppercase bg-slate-900/30">
//                 <tr>
//                   <th className="px-6 py-4">Issue Name</th>
//                   <th className="px-6 py-4">Severity</th>
//                   <th className="px-6 py-4">Location</th>
//                   <th className="px-6 py-4">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-700/50">
//                 {findings.map((bug) => (
//                   <tr key={bug.id} className="hover:bg-slate-700/20 transition-all group">
//                     <td className="px-6 py-5 font-semibold text-slate-200">{bug.name}</td>
//                     <td className="px-6 py-5">
//                       <span className={`px-3 py-1 rounded-lg text-[10px] font-black border ${
//                         bug.severity === 'CRITICAL' ? 'bg-red-500/10 text-red-500 border-red-500/20' : 'bg-orange-500/10 text-orange-500 border-orange-500/20'
//                       }`}>
//                         {bug.severity}
//                       </span>
//                     </td>
//                     <td className="px-6 py-5 text-slate-400 font-mono text-xs">{bug.location}</td>
//                     <td className="px-6 py-5">
//                       <button className="text-blue-400 hover:text-white transition-colors">
//                         <ExternalLink className="w-4 h-4" />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* --- VISUAL PROOF (SCREENSHOTS) --- */}
//         <div className="bg-slate-800/40 border border-slate-700 rounded-3xl p-6 backdrop-blur-sm">
//           <h2 className="font-bold mb-6 flex items-center gap-2 text-lg">
//             <ImageIcon className="w-5 h-5 text-purple-400" /> Visual Evidence
//           </h2>
//           <div className="space-y-4">
//             {/* Mock Screenshot Placeholder */}
//             <div className="aspect-video bg-slate-900 rounded-2xl border border-slate-700 flex flex-col items-center justify-center group cursor-pointer hover:border-blue-500/50 transition-all overflow-hidden relative">
//               <ImageIcon className="w-12 h-12 text-slate-700 group-hover:text-blue-500 transition-all" />
//               <p className="text-xs text-slate-600 mt-2">SQL_Injection_Proof.png</p>
//               <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-all"></div>
//             </div>

//             <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 flex justify-between items-center">
//               <div>
//                 <p className="text-xs font-bold">Error_Screenshot_01.jpg</p>
//                 <p className="text-[10px] text-slate-500">Captured: 2 mins ago</p>
//               </div>
//               <CheckCircle className="w-4 h-4 text-green-500" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Sub-component for Stats
// const StatCard = ({ title, value, icon: Icon, color, border }) => (
//   <div className={`bg-slate-800/40 p-6 rounded-2xl border ${border} backdrop-blur-sm`}>
//     <div className="flex justify-between items-center">
//       <div>
//         <p className="text-slate-400 text-xs mb-1 uppercase font-bold tracking-widest">{title}</p>
//         <h3 className="text-3xl font-black">{value}</h3>
//       </div>
//       <div className={`p-3 rounded-xl bg-slate-900/50`}>
//         <Icon className={`${color} w-6 h-6`} />
//       </div>
//     </div>
//   </div>
// );

// export default App;

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  Search, 
  Image as ImageIcon, 
  CheckCircle, 
  FileCode, 
  ExternalLink, 
  Activity, 
  Terminal,
  ChevronRight
} from 'lucide-react';

/**
 * BUG HUNTER - PRO DASHBOARD
 * Tech Stack: React + Tailwind CSS + Lucide Icons
 */

const App = () => {
  const [target, setTarget] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [findings, setFindings] = useState([]);

  // Mock data loading (Simulating Java/Python engine output)
  useEffect(() => {
    const mockFindings = [
      { id: 1, name: 'SQL Injection', severity: 'CRITICAL', location: 'auth.java : Line 88', status: 'Open', time: '10:45 AM' },
      { id: 2, name: 'XSS Vulnerability', severity: 'HIGH', location: 'login_form_url', status: 'In-Progress', time: '10:50 AM' },
      { id: 3, name: 'Broken Authentication', severity: 'CRITICAL', location: 'session_manager.py', status: 'Open', time: '11:02 AM' },
    ];
    setFindings(mockFindings);
  }, []);

  const startScan = () => {
    if (!target) return; 
    setIsScanning(true);
    // Simulation for backend engine trigger
    setTimeout(() => {
      setIsScanning(false);
    }, 5000); 
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans p-4 md:p-8">
      
      {/* --- TOP BAR: Logo & Search --- */}
      <nav className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center mb-10 gap-6 bg-slate-900/50 p-6 rounded-3xl border border-slate-800 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="bg-blue-600 p-3 rounded-2xl shadow-lg shadow-blue-500/20 ring-1 ring-blue-400/50">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tighter text-white uppercase italic">
              Bug Hunter <span className="text-blue-500 not-italic">Pro</span>
            </h1>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest opacity-70">Engine V2.0 Active</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-black/40 border border-slate-700/50 p-1.5 rounded-2xl w-full lg:w-[600px] focus-within:border-blue-500/50 transition-all shadow-inner">
          <div className="pl-3">
            <Search className="w-5 h-5 text-slate-500" />
          </div>
          <input 
            type="text" 
            placeholder="URL daalein ya Folder path..." 
            className="bg-transparent border-none outline-none flex-1 px-3 text-sm font-medium placeholder:text-slate-600 text-blue-100"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />
          <button 
            onClick={startScan}
            disabled={isScanning}
            className={`px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${
              isScanning 
              ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-95'
            }`}
          >
            {isScanning ? 'SCANNING...' : 'LAUNCH SCAN'}
          </button>
        </div>
      </nav>

      {/* --- QUICK STATS --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard title="Bugs Found" value={findings.length} icon={AlertTriangle} color="text-yellow-400" bgColor="bg-yellow-400/10" />
        <StatCard title="Critical" value="2" icon={Shield} color="text-red-500" bgColor="bg-red-500/10" />
        <StatCard title="Scanned Files" value="1,248" icon={FileCode} color="text-blue-400" bgColor="bg-blue-400/10" />
        <StatCard title="Health Status" value="Online" icon={Activity} color="text-green-400" bgColor="bg-green-400/10" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- FINDINGS LOG --- */}
        <div className="lg:col-span-2 bg-slate-900/40 border border-slate-800/60 rounded-[2rem] overflow-hidden backdrop-blur-md shadow-2xl">
          <div className="p-8 border-b border-slate-800/60 flex justify-between items-center bg-white/[0.02]">
            <h2 className="font-bold flex items-center gap-3 text-xl">
              <Terminal className="w-6 h-6 text-blue-500" /> 
              Vulnerability Log
            </h2>
            <span className="text-[10px] bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20 font-bold uppercase tracking-widest">
              Live Sync
            </span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="text-slate-500 text-[10px] uppercase font-black bg-black/20 tracking-widest">
                <tr>
                  <th className="px-8 py-5">Bug Name</th>
                  <th className="px-6 py-5">Severity</th>
                  <th className="px-6 py-5">Location</th>
                  <th className="px-6 py-5 text-right font-sans lowercase italic opacity-50">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/40">
                {findings.map((bug) => (
                  <tr key={bug.id} className="hover:bg-blue-500/[0.02] transition-all group">
                    <td className="px-8 py-6">
                      <div className="font-bold text-slate-200 group-hover:text-blue-400 transition-colors">{bug.name}</div>
                      <div className="text-[10px] text-slate-600 font-mono mt-0.5 uppercase">Detected: {bug.time}</div>
                    </td>
                    <td className="px-6 py-6">
                      <span className={`px-3 py-1 rounded-lg text-[10px] font-black border tracking-wider ${
                        bug.severity === 'CRITICAL' 
                        ? 'bg-red-500/10 text-red-500 border-red-500/20' 
                        : 'bg-orange-500/10 text-orange-500 border-orange-500/20'
                      }`}>
                        {bug.severity}
                      </span>
                    </td>
                    <td className="px-6 py-6 font-mono text-[11px] text-slate-500 italic">
                      {bug.location}
                    </td>
                    <td className="px-6 py-6 text-right">
                      <button className="p-2 text-slate-500 hover:text-white hover:bg-slate-800 rounded-xl transition-all">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-6 bg-black/20 border-t border-slate-800/60 flex justify-center">
             <button className="text-xs font-bold text-slate-500 hover:text-blue-400 flex items-center gap-1 transition-colors uppercase tracking-widest">
               Sare reports dekhein <ChevronRight className="w-3 h-3" />
             </button>
          </div>
        </div>

        {/* --- EVIDENCE & TOOLS --- */}
        <div className="flex flex-col gap-6">
          <div className="bg-slate-900/40 border border-slate-800/60 rounded-[2rem] p-8 backdrop-blur-md shadow-2xl">
            <h2 className="font-bold mb-8 flex items-center gap-3 text-xl">
              <ImageIcon className="w-6 h-6 text-purple-500" /> Evidence
            </h2>
            
            <div className="space-y-6">
              <div className="aspect-video bg-black/60 rounded-3xl border-2 border-dashed border-slate-800 flex flex-col items-center justify-center group cursor-pointer hover:border-blue-500/30 transition-all overflow-hidden relative shadow-inner">
                <div className="p-4 bg-slate-900 rounded-2xl mb-2 group-hover:scale-110 transition-transform duration-500">
                  <ImageIcon className="w-8 h-8 text-slate-700 group-hover:text-blue-500" />
                </div>
                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Screenshot_Proof.png</p>
                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-all"></div>
              </div>

              <div className="bg-black/40 p-5 rounded-2xl border border-slate-800 flex justify-between items-center group hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-300 uppercase tracking-tighter">System_Audit.log</p>
                    <p className="text-[10px] text-slate-600 font-mono italic">Verified File</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-700 group-hover:text-blue-500" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] p-8 text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="font-black text-xl mb-2 uppercase tracking-tight">Upgrade Karein</h3>
              <p className="text-sm text-blue-100/80 mb-6 leading-relaxed">Advance AI features aur team collab ke liye premium lein.</p>
              <button className="w-full bg-white text-blue-700 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-blue-50 transition-colors transform active:scale-95">
                Go Premium
              </button>
            </div>
            <Shield className="absolute -bottom-10 -right-10 w-40 h-40 text-white/10 group-hover:scale-110 transition-transform duration-700" />
          </div>
        </div>

      </div>
    </div>
  );
};

// Stats Card Sub-component
const StatCard = ({ title, value, icon: Icon, color, bgColor }) => (
  <div className={`bg-slate-900/40 p-7 rounded-[2rem] border border-slate-800/60 backdrop-blur-md shadow-xl hover:translate-y-[-4px] transition-all duration-300`}>
    <div className="flex justify-between items-start">
      <div>
        <p className="text-slate-500 text-[10px] mb-2 uppercase font-black tracking-[0.2em]">{title}</p>
        <h3 className="text-4xl font-black text-white tracking-tighter">{value}</h3>
      </div>
      <div className={`p-4 rounded-2xl ${bgColor} border border-white/5`}>
        <Icon className={`${color} w-6 h-6`} />
      </div>
    </div>
  </div>
);

export default App;