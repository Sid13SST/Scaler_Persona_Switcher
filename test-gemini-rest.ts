const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

async function checkModels() {
  const resBeta = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
  const dataBeta = await resBeta.json();
  const betaNames = dataBeta.models?.map((m: any) => m.name);
  console.log('v1beta contains 2.5-flash?', betaNames?.includes('models/gemini-2.5-flash'));
  
  const resAlpha = await fetch(`https://generativelanguage.googleapis.com/v1alpha/models?key=${apiKey}`);
  const dataAlpha = await resAlpha.json();
  const alphaNames = dataAlpha.models?.map((m: any) => m.name);
  console.log('v1alpha contains 2.5-flash?', alphaNames?.includes('models/gemini-2.5-flash'));
}

checkModels();
