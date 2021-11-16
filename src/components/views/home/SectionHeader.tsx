interface SectionHeaderProps {
  name: string;
}

const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div className="section-header">
      <div>
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default SectionHeader;
