"use client";

import FloatingLines from "@/components/FloatingLines";
import { FloatingLinesErrorBoundary } from "@/components/FloatingLinesErrorBoundary";

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      <FloatingLinesErrorBoundary>
        <FloatingLines
          linesGradient={["#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899"]}
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[4, 6, 4]}
          lineDistance={[8, 6, 10]}
          animationSpeed={0.8}
          interactive={true}
          bendRadius={6}
          bendStrength={-0.4}
          parallax={true}
          parallaxStrength={0.15}
          mixBlendMode="screen"
        />
      </FloatingLinesErrorBoundary>
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
    </div>
  );
}
