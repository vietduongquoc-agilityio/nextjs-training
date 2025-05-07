// import { useEffect, useState } from "react";
// import { getProviders, signIn, LiteralUnion, ClientSafeProvider } from "next-auth/react";
// import { BuiltInProviderType } from "next-auth/providers";

// interface ProvidersType {
//   [key: string]: ClientSafeProvider;
// }

// export default function SignIn() {
//   const [providers, setProviders] = useState<ProvidersType | null>(null);

//   useEffect(() => {
//     (async () => {
//       const res = await getProviders();
//       setProviders(res as ProvidersType);
//     })();
//   }, []);

//   if (!providers) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Login</h1>
//       {Object.values(providers).map((provider) => (
//         <div key={provider.name}>
//           <button onClick={() => signIn(provider.id)}>
//             Login with {provider.name}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }
