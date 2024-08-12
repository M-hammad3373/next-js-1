import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/Snapchat-313278848.jpg" alt="hammad" width="350" height="450"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “As a law student, you're diving into the complexities of legal systems,
         learning to analyze statutes, case law, and legal principles. 
         You're developing critical thinking skills,
          honing your ability to construct well-reasoned arguments,
           and gaining an understanding of the role of law in society. 
           Your studies will prepare you for a variety of careers in the legal field,
            from practicing attorney to policymaker.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Hammad Ali
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Student , LAW 
      </div>
    </figcaption>
  </div>
</figure>
</div>
 </main>
  );
}
