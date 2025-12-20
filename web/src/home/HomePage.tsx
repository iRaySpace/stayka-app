import { Navbar } from "@/components/navbar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


function HomePage() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <Navbar />
      </header>
      <section>
        <h2>Inspiration for future getaways</h2>
        <Tabs defaultValue="arts-and-culture">
          <TabsList>
            <TabsTrigger value="arts-and-culture">Arts & culture</TabsTrigger>
            <TabsTrigger value="beach">Beach</TabsTrigger>
            <TabsTrigger value="mountains">Mountains</TabsTrigger>
            <TabsTrigger value="outdoors">Outdoors</TabsTrigger>
            <TabsTrigger value="friendly-apartments">Friendly apartments</TabsTrigger>
          </TabsList>
          <TabsContent value="arts-and-culture">Arts & Culture</TabsContent>
          <TabsContent value="beach">Beach</TabsContent>
          <TabsContent value="mountains">Mountains</TabsContent>
          <TabsContent value="outdoors">Outdoors</TabsContent>
          <TabsContent value="friendly-apartments">Friendly apartments</TabsContent>
        </Tabs>
      </section>
    </>
  );
}

export default HomePage