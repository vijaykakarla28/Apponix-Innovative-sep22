import CloseButton from 'react-bootstrap/CloseButton';

export function VariantsExample() {
  return (
    <div className="bg-dark p-3">
      <CloseButton variant="white" />
      <CloseButton variant="white" disabled />
    </div>
  );
}

export default VariantsExample;