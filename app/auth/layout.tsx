/**
 * Renders the authentication layout component.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to render.
 * @returns {React.ReactNode} The rendered authentication layout component.
 */
const authLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-700 to-purple-900">
      {children}
    </div>
  );
};

export default authLayout;
