export function Card() {
  return (
    <article className="flex gap-6 justify-between">
      <div className="space-y-4 max-w-72 py-4">
        <div>
          <h3 className="font-semibold text-lg">Catalyst</h3>
          <p className="text-muted-foreground">Application UI kit</p>
        </div>

        <p className="text-muted-foreground">
          Modern application UI components to kickstart your design system.
        </p>

        <span className="w-10 h-px bg-gray-300"></span>

        <p className="text-muted-foreground">
          <span className="font-medium text-foreground">$149 </span>or included
          with all-access
        </p>
      </div>

      <div className="flex gap-6">
        <div className="bg-gray-400 rounded-md h-48 w-72"></div>
        <div className="bg-gray-400 rounded-md h-48 w-72"></div>
        <div className="bg-gray-400 rounded-md h-48 w-72"></div>
      </div>
    </article>
  );
}
