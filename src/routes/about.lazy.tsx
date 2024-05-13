import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle-mode";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="p-2">
      Hello from About! <Button>Click me</Button> <ModeToggle></ModeToggle>
    </div>
  );
}
