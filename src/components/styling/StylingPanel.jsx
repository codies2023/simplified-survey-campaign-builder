import AppearanceSettings from "./AppearanceSettings";
import QuestionTitleStyling from "./QuestionTitleStyling";
import SubtitleStyling from "./SubtitleStyling";
import OptionListStyling from "./OptionListStyling";
import SelectedOptionStyling from "./SelectedOptionStyling";
import UnselectedOptionStyling from "./UnselectedOptionStyling";
import CommentStyling from "./CommentStyling";
import CTAButtonStyling from "./CTAButtonStyling";
import CrossButtonStyling from "./CrossButtonStyling";
import ThankYouStyling from "./ThankYouStyling";
export default function StylingPanel() {
  return (
    <div>
      <AppearanceSettings />
      <QuestionTitleStyling />
      <SubtitleStyling />
      <OptionListStyling />
      <SelectedOptionStyling />
      <UnselectedOptionStyling />
      <CommentStyling />
      <CTAButtonStyling />
      <CrossButtonStyling />
      <ThankYouStyling />
    </div>
  );
}
