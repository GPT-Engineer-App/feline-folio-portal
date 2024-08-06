import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cat } from "lucide-react";

const catFacts = [
  "Cats have over 20 muscles that control their ears.",
  "A group of cats is called a clowder.",
  "Cats spend 70% of their lives sleeping.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats can't taste sweetness.",
];

const Index = () => {
  const [factIndex, setFactIndex] = useState(0);

  const nextFact = () => {
    setFactIndex((prevIndex) => (prevIndex + 1) % catFacts.length);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-4xl font-bold flex items-center gap-2">
            <Cat className="h-8 w-8" />
            All About Cats
          </CardTitle>
          <CardDescription>Discover the fascinating world of felines</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt="Cute cat"
              className="mx-auto object-cover w-full h-64 rounded-lg shadow-md"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Did You Know?</h2>
            <p className="text-lg">{catFacts[factIndex]}</p>
            <Button onClick={nextFact} className="w-full">
              Next Fact
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
