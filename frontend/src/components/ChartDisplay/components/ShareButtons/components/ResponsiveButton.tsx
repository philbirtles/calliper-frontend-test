import {
  useMediaQuery,
  useTheme,
  Button,
  IconButton,
  ButtonProps,
} from "@mui/material";

export interface ResponsiveButtonProps extends ButtonProps {
  icon: React.ReactNode;
  content: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ResponsiveButton = ({
  icon,
  content,
  onClick,
  ...rest
}: ResponsiveButtonProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  if (isSmallScreen) {
    return (
      <IconButton onClick={onClick} {...rest}>
        {icon}
      </IconButton>
    );
  }

  return (
    <Button startIcon={icon} onClick={onClick} {...rest}>
      {content}
    </Button>
  );
};
