import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const filters = ["All", "Placement", "Result", "Event"];

export function NotificationFilter({ value, onChange }) {
  return (
    <div className="filter-container animate-fade-in-up">
      <ToggleButtonGroup
        value={value}
        onChange={onChange}
        exclusive
        size="small"
        sx={{ 
          flexWrap: "wrap", 
          gap: 1, 
          '& .MuiToggleButtonGroup-grouped': {
            border: 0,
            '&:not(:first-of-type)': {
              borderRadius: '12px',
            },
            '&:first-of-type': {
              borderRadius: '12px',
            },
          }
        }}
      >
        {filters.map((type) => (
          <ToggleButton 
            key={type} 
            value={type} 
            sx={{ px: 2.5, py: 0.75 }}
          >
            {type}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}