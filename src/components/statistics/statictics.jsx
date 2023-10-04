import { Section, Item, List, Label } from './statistics-style';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <h2 style={{ color: 'white' }}>{title}</h2>}
      <List>
        {stats.map(item => (
          <Item key={item.id}>
            <Label>{item.label}</Label>
            <span>{item.percentage}%</span>
          </Item>
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};
