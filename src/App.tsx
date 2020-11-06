import { create, tsx } from '@dojo/framework/core/vdom';
import Outlet from '@dojo/framework/routing/Outlet';
import Link from '@dojo/framework/routing/Link';
import theme from '@dojo/framework/core/middleware/theme';
import dojo from '@dojo/widgets/theme/dojo';

import AccordionBasic from './widgets/accordion/Basic';
import AccordionExclusive from './widgets/accordion/Exclusive';
import AvatarBasic from './widgets/avatar/Basic';
import AvatarIcon from './widgets/avatar/Icon';
import AvatarImage from './widgets/avatar/Image';
import AvatarSecondary from './widgets/avatar/Secondary';
import AvatarSize from './widgets/avatar/Size';
import AvatarVariant from './widgets/avatar/Variant';
import BreadcrumbgroupBasic from './widgets/breadcrumb-group/Basic';
import BreadcrumbgroupCustomRenderer from './widgets/breadcrumb-group/CustomRenderer';
import ButtonBasic from './widgets/button/Basic';
import ButtonDisabledSubmit from './widgets/button/DisabledSubmit';
import ButtonToggleButton from './widgets/button/ToggleButton';
import CalendarBasic from './widgets/calendar/Basic';
import CalendarCustomFirstWeekDay from './widgets/calendar/CustomFirstWeekDay';
import CalendarFullyControlled from './widgets/calendar/FullyControlled';
import CalendarInitialMonthAndYear from './widgets/calendar/InitialMonthAndYear';
import CalendarLimitedRange from './widgets/calendar/LimitedRange';
import CardActionButtons from './widgets/card/ActionButtons';
import CardActionButtonsAndIcons from './widgets/card/ActionButtonsAndIcons';
import CardActionIcons from './widgets/card/ActionIcons';
import CardBasic from './widgets/card/Basic';
import CardCardCombined from './widgets/card/CardCombined';
import CardCardWithMediaContent from './widgets/card/CardWithMediaContent';
import CardCardWithMediaRectangle from './widgets/card/CardWithMediaRectangle';
import CardCardWithMediaSquare from './widgets/card/CardWithMediaSquare';
import CheckboxgroupBasic from './widgets/checkbox-group/Basic';
import CheckboxgroupControlled from './widgets/checkbox-group/Controlled';
import CheckboxgroupCustomLabel from './widgets/checkbox-group/CustomLabel';
import CheckboxgroupCustomRenderer from './widgets/checkbox-group/CustomRenderer';
import CheckboxgroupInitialValue from './widgets/checkbox-group/InitialValue';
import CheckboxBasic from './widgets/checkbox/Basic';
import CheckboxCustomLabel from './widgets/checkbox/CustomLabel';
import CheckboxDisabled from './widgets/checkbox/Disabled';
import CheckboxReadonly from './widgets/checkbox/Readonly';
import ChiptypeaheadBasic from './widgets/chip-typeahead/Basic';
import ChiptypeaheadBottomPlacement from './widgets/chip-typeahead/BottomPlacement';
import ChiptypeaheadControlled from './widgets/chip-typeahead/Controlled';
import ChiptypeaheadCustomRenderer from './widgets/chip-typeahead/CustomRenderer';
import ChiptypeaheadDisabled from './widgets/chip-typeahead/Disabled';
import ChiptypeaheadDuplicates from './widgets/chip-typeahead/Duplicates';
import ChiptypeaheadFreeText from './widgets/chip-typeahead/FreeText';
import ChipBasic from './widgets/chip/Basic';
import ChipClickable from './widgets/chip/Clickable';
import ChipClickableClosable from './widgets/chip/ClickableClosable';
import ChipClosable from './widgets/chip/Closable';
import ChipClosableRenderer from './widgets/chip/ClosableRenderer';
import ChipDisabled from './widgets/chip/Disabled';
import ChipIcon from './widgets/chip/Icon';
import ConstrainedinputBasic from './widgets/constrained-input/Basic';
import ConstrainedinputUsername from './widgets/constrained-input/Username';
import ContextmenuBasic from './widgets/context-menu/Basic';
import ContextpopupBasic from './widgets/context-popup/Basic';
import DateinputBasic from './widgets/date-input/Basic';
import DateinputControlled from './widgets/date-input/Controlled';
import DialogActionsDialog from './widgets/dialog/ActionsDialog';
import DialogAlertDialog from './widgets/dialog/AlertDialog';
import DialogAnimatedDialog from './widgets/dialog/AnimatedDialog';
import DialogBasic from './widgets/dialog/Basic';
import DialogCloseableDialog from './widgets/dialog/CloseableDialog';
import DialogFocusTrappedDialog from './widgets/dialog/FocusTrappedDialog';
import DialogModalDialog from './widgets/dialog/ModalDialog';
import DialogUnderlayDialog from './widgets/dialog/UnderlayDialog';
import EmailinputBasic from './widgets/email-input/Basic';
import FloatingactionbuttonBasic from './widgets/floating-action-button/Basic';
import FloatingactionbuttonExtended from './widgets/floating-action-button/Extended';
import FloatingactionbuttonSmall from './widgets/floating-action-button/Small';
import FormActionForm from './widgets/form/ActionForm';
import FormBasic from './widgets/form/Basic';
import FormControlled from './widgets/form/Controlled';
import FormDisabledFieldsForm from './widgets/form/DisabledFieldsForm';
import FormDisabledForm from './widgets/form/DisabledForm';
import FormFillingForm from './widgets/form/FillingForm';
import FormInitialValueForm from './widgets/form/InitialValueForm';
import FormKitchenSinkForm from './widgets/form/KitchenSinkForm';
import FormRequiredFieldsForm from './widgets/form/RequiredFieldsForm';
import FormResettingForm from './widgets/form/ResettingForm';
import FormSubmitForm from './widgets/form/SubmitForm';
import FormValidation from './widgets/form/Validation';
import GlobaleventBasic from './widgets/global-event/Basic';
import GridAdvanced from './widgets/grid/Advanced';
import GridBasic from './widgets/grid/Basic';
import GridColumnResize from './widgets/grid/ColumnResize';
import GridCustomCellRenderer from './widgets/grid/CustomCellRenderer';
import GridCustomFilterRenderer from './widgets/grid/CustomFilterRenderer';
import GridCustomSortRenderer from './widgets/grid/CustomSortRenderer';
import GridEditableCells from './widgets/grid/EditableCells';
import GridFiltering from './widgets/grid/Filtering';
import GridPaginated from './widgets/grid/Paginated';
import GridRestful from './widgets/grid/Restful';
import GridRowSelection from './widgets/grid/RowSelection';
import GridSorting from './widgets/grid/Sorting';
import HeadercardActionCard from './widgets/header-card/ActionCard';
import HeadercardBasic from './widgets/header-card/Basic';
import HeadercardMediaCard from './widgets/header-card/MediaCard';
import HeaderBasic from './widgets/header/Basic';
import HeaderLeading from './widgets/header/Leading';
import HeaderSticky from './widgets/header/Sticky';
import HeaderTrailing from './widgets/header/Trailing';
import IconAltText from './widgets/icon/AltText';
import IconBasic from './widgets/icon/Basic';
import IconIconButton from './widgets/icon/IconButton';
import IconSizes from './widgets/icon/Sizes';
import LabelBasic from './widgets/label/Basic';
import LabelDisabledLabel from './widgets/label/DisabledLabel';
import LabelHiddenLabel from './widgets/label/HiddenLabel';
import LabelInvalidLabel from './widgets/label/InvalidLabel';
import LabelSecondaryLabel from './widgets/label/SecondaryLabel';
import ListBasic from './widgets/list/Basic';
import ListControlled from './widgets/list/Controlled';
import ListCustomTransformer from './widgets/list/CustomTransformer';
import ListDisabled from './widgets/list/Disabled';
import ListDividers from './widgets/list/Dividers';
import ListFetchedResource from './widgets/list/FetchedResource';
import ListItemRenderer from './widgets/list/ItemRenderer';
import ListMenu from './widgets/list/Menu';
import LoadingindicatorBasic from './widgets/loading-indicator/Basic';
import NativeselectBasic from './widgets/native-select/Basic';
import NativeselectControlledNativeSelect from './widgets/native-select/ControlledNativeSelect';
import NumberinputBasic from './widgets/number-input/Basic';
import NumberinputValidation from './widgets/number-input/Validation';
import OutlinedbuttonBasic from './widgets/outlined-button/Basic';
import OutlinedbuttonDisabledSubmit from './widgets/outlined-button/DisabledSubmit';
import OutlinedbuttonToggleButton from './widgets/outlined-button/ToggleButton';
import PaginationBasic from './widgets/pagination/Basic';
import PaginationControlled from './widgets/pagination/Controlled';
import PaginationPageSizeSelector from './widgets/pagination/PageSizeSelector';
import PaginationSiblingCount from './widgets/pagination/SiblingCount';
import PasswordinputBasic from './widgets/password-input/Basic';
import PasswordinputNoRules from './widgets/password-input/NoRules';
import ProgressBasic from './widgets/progress/Basic';
import ProgressProgressWithChangingValues from './widgets/progress/ProgressWithChangingValues';
import ProgressProgressWithCustomOutput from './widgets/progress/ProgressWithCustomOutput';
import ProgressProgressWithMax from './widgets/progress/ProgressWithMax';
import ProgressProgressWithoutOutput from './widgets/progress/ProgressWithoutOutput';
import RadiogroupBasic from './widgets/radio-group/Basic';
import RadiogroupControlled from './widgets/radio-group/Controlled';
import RadiogroupCustomLabel from './widgets/radio-group/CustomLabel';
import RadiogroupCustomRenderer from './widgets/radio-group/CustomRenderer';
import RadiogroupInitialValue from './widgets/radio-group/InitialValue';
import RadioBasic from './widgets/radio/Basic';
import RadioDisabled from './widgets/radio/Disabled';
import RadioEvents from './widgets/radio/Events';
import RadioLabelled from './widgets/radio/Labelled';
import RaisedbuttonBasic from './widgets/raised-button/Basic';
import RaisedbuttonDisabledSubmit from './widgets/raised-button/DisabledSubmit';
import RaisedbuttonToggleButton from './widgets/raised-button/ToggleButton';
import RangesliderBasic from './widgets/range-slider/Basic';
import RangesliderControlled from './widgets/range-slider/Controlled';
import RangesliderDisabled from './widgets/range-slider/Disabled';
import RangesliderEvents from './widgets/range-slider/Events';
import RangesliderLabelled from './widgets/range-slider/Labelled';
import RangesliderMinMax from './widgets/range-slider/MinMax';
import RangesliderRequired from './widgets/range-slider/Required';
import RangesliderTooltip from './widgets/range-slider/Tooltip';
import ResultAlert from './widgets/result/Alert';
import ResultBasic from './widgets/result/Basic';
import ResultCustomIcon from './widgets/result/CustomIcon';
import ResultError from './widgets/result/Error';
import ResultSuccess from './widgets/result/Success';
import SelectAdditionalText from './widgets/select/AdditionalText';
import SelectBasic from './widgets/select/Basic';
import SelectControlled from './widgets/select/Controlled';
import SelectCustomRenderer from './widgets/select/CustomRenderer';
import SelectDisabledSelect from './widgets/select/DisabledSelect';
import SelectRequiredSelect from './widgets/select/RequiredSelect';
import SlidepaneBasic from './widgets/slide-pane/Basic';
import SlidepaneBottomAlignSlidePane from './widgets/slide-pane/BottomAlignSlidePane';
import SlidepaneFixedWidthSlidePane from './widgets/slide-pane/FixedWidthSlidePane';
import SlidepaneLeftAlignSlidePane from './widgets/slide-pane/LeftAlignSlidePane';
import SlidepaneRightAlignSlidePane from './widgets/slide-pane/RightAlignSlidePane';
import SlidepaneUnderlaySlidePane from './widgets/slide-pane/UnderlaySlidePane';
import SliderBasic from './widgets/slider/Basic';
import SliderControlled from './widgets/slider/Controlled';
import SliderDisabledSlider from './widgets/slider/DisabledSlider';
import SliderSliderWithCustomOutput from './widgets/slider/SliderWithCustomOutput';
import SliderSliderWithNoOutput from './widgets/slider/SliderWithNoOutput';
import SliderSliderWithValidityCheck from './widgets/slider/SliderWithValidityCheck';
import SliderVerticalSlider from './widgets/slider/VerticalSlider';
import SnackbarBasic from './widgets/snackbar/Basic';
import SnackbarError from './widgets/snackbar/Error';
import SnackbarLeading from './widgets/snackbar/Leading';
import SnackbarStacked from './widgets/snackbar/Stacked';
import SnackbarSuccess from './widgets/snackbar/Success';
import SpeeddialBasic from './widgets/speed-dial/Basic';
import SpeeddialCustomIcons from './widgets/speed-dial/CustomIcons';
import SpeeddialDirection from './widgets/speed-dial/Direction';
import SpeeddialTitleText from './widgets/speed-dial/TitleText';
import SwitchBasic from './widgets/switch/Basic';
import SwitchDisabled from './widgets/switch/Disabled';
import TabcontainerBasic from './widgets/tab-container/Basic';
import TabcontainerButtonAlignment from './widgets/tab-container/ButtonAlignment';
import TabcontainerCloseable from './widgets/tab-container/Closeable';
import TabcontainerControlled from './widgets/tab-container/Controlled';
import TabcontainerDisabled from './widgets/tab-container/Disabled';
import TextareaBasic from './widgets/text-area/Basic';
import TextareaControlled from './widgets/text-area/Controlled';
import TextareaDisabled from './widgets/text-area/Disabled';
import TextareaHelperText from './widgets/text-area/HelperText';
import TextareaHiddenLabel from './widgets/text-area/HiddenLabel';
import TextareaLabel from './widgets/text-area/Label';
import TextareaValidatedCustom from './widgets/text-area/ValidatedCustom';
import TextareaValidatedRequired from './widgets/text-area/ValidatedRequired';
import TextinputBasic from './widgets/text-input/Basic';
import TextinputControlled from './widgets/text-input/Controlled';
import TextinputDisabled from './widgets/text-input/Disabled';
import TextinputHelperText from './widgets/text-input/HelperText';
import TextinputHiddenLabel from './widgets/text-input/HiddenLabel';
import TextinputLeadingTrailing from './widgets/text-input/LeadingTrailing';
import TextinputPlaceholder from './widgets/text-input/Placeholder';
import TextinputValidated from './widgets/text-input/Validated';
import TextinputWithLabel from './widgets/text-input/WithLabel';
import ThreecolumnlayoutBasic from './widgets/three-column-layout/Basic';
import Timepicker12HourTime from './widgets/time-picker/12HourTime';
import TimepickerBasic from './widgets/time-picker/Basic';
import TimepickerControlled from './widgets/time-picker/Controlled';
import TimepickerDisabled from './widgets/time-picker/Disabled';
import TimepickerDisabledMenuItems from './widgets/time-picker/DisabledMenuItems';
import TimepickerRequired from './widgets/time-picker/Required';
import TimepickerSelectBySecond from './widgets/time-picker/SelectBySecond';
import TitlepaneBasic from './widgets/title-pane/Basic';
import TitlepaneControlled from './widgets/title-pane/Controlled';
import TitlepaneHeadingLevel from './widgets/title-pane/HeadingLevel';
import TitlepaneNonCloseable from './widgets/title-pane/NonCloseable';
import TooltipBasic from './widgets/tooltip/Basic';
import TooltipClick from './widgets/tooltip/Click';
import TooltipFocus from './widgets/tooltip/Focus';
import TriggerpopupBasic from './widgets/trigger-popup/Basic';
import TriggerpopupMenuPopup from './widgets/trigger-popup/MenuPopup';
import TriggerpopupSetWidth from './widgets/trigger-popup/SetWidth';
import TriggerpopupUnderlay from './widgets/trigger-popup/Underlay';
import TwocolumnlayoutBasic from './widgets/two-column-layout/Basic';
import TwocolumnlayoutCollapsing from './widgets/two-column-layout/Collapsing';
import TwocolumnlayoutResize from './widgets/two-column-layout/Resize';
import TwocolumnlayoutTrailingBias from './widgets/two-column-layout/TrailingBias';
import TypeaheadBasic from './widgets/typeahead/Basic';
import TypeaheadFreeText from './widgets/typeahead/FreeText';
import TypeaheadRemoteSource from './widgets/typeahead/RemoteSource';
import TypeaheadValidation from './widgets/typeahead/Validation';

const factory = create({ theme });

export default factory(function App({ middleware: { theme } }) {
	if (!theme.get()) {
		theme.set(dojo);
	}
	return (
		<div classes="flex-grid">
			<div classes={['col', 'sidebar']}>
				<ul classes={'links'}>
					<li>
						<Link to="main" params={{ widget: 'accordion', example: 'basic' }}>
							accordion/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'accordion', example: 'exclusive' }}>
							accordion/exclusive
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'avatar', example: 'basic' }}>
							avatar/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'avatar', example: 'icon' }}>
							avatar/icon
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'avatar', example: 'image' }}>
							avatar/image
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'img', example: 'dojo' }}>
							img/dojo
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'avatar', example: 'secondary' }}>
							avatar/secondary
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'avatar', example: 'size' }}>
							avatar/size
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'avatar', example: 'variant' }}>
							avatar/variant
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'breadcrumb-group', example: 'basic' }}>
							breadcrumb-group/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'breadcrumb-group', example: 'customrenderer.m' }}>
							breadcrumb-group/customrenderer.m
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'breadcrumb-group', example: 'customrenderer.m.css.d' }}>
							breadcrumb-group/customrenderer.m.css.d
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'breadcrumb-group', example: 'customrenderer' }}>
							breadcrumb-group/customrenderer
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'button', example: 'basic' }}>
							button/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'button', example: 'disabledsubmit' }}>
							button/disabledsubmit
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'button', example: 'togglebutton' }}>
							button/togglebutton
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'calendar', example: 'basic' }}>
							calendar/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'calendar', example: 'customfirstweekday' }}>
							calendar/customfirstweekday
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'calendar', example: 'fullycontrolled' }}>
							calendar/fullycontrolled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'calendar', example: 'initialmonthandyear' }}>
							calendar/initialmonthandyear
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'calendar', example: 'limitedrange' }}>
							calendar/limitedrange
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'card', example: 'actionbuttons' }}>
							card/actionbuttons
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'card', example: 'actionbuttonsandicons' }}>
							card/actionbuttonsandicons
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'card', example: 'actionicons' }}>
							card/actionicons
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'card', example: 'basic' }}>
							card/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'card', example: 'cardcombined' }}>
							card/cardcombined
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'card', example: 'cardwithmediacontent' }}>
							card/cardwithmediacontent
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'card', example: 'cardwithmediarectangle' }}>
							card/cardwithmediarectangle
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'card', example: 'cardwithmediasquare' }}>
							card/cardwithmediasquare
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'img', example: 'card-photo' }}>
							img/card-photo
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'checkbox-group', example: 'basic' }}>
							checkbox-group/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'checkbox-group', example: 'controlled' }}>
							checkbox-group/controlled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'checkbox-group', example: 'customlabel' }}>
							checkbox-group/customlabel
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'checkbox-group', example: 'customrenderer' }}>
							checkbox-group/customrenderer
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'checkbox-group', example: 'initialvalue' }}>
							checkbox-group/initialvalue
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'checkbox', example: 'basic' }}>
							checkbox/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'checkbox', example: 'customlabel' }}>
							checkbox/customlabel
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'checkbox', example: 'disabled' }}>
							checkbox/disabled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'checkbox', example: 'readonly' }}>
							checkbox/readonly
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'chip-typeahead', example: 'basic' }}>
							chip-typeahead/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'chip-typeahead', example: 'bottomplacement' }}>
							chip-typeahead/bottomplacement
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'chip-typeahead', example: 'controlled' }}>
							chip-typeahead/controlled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'chip-typeahead', example: 'customrenderer' }}>
							chip-typeahead/customrenderer
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'chip-typeahead', example: 'disabled' }}>
							chip-typeahead/disabled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'chip-typeahead', example: 'duplicates' }}>
							chip-typeahead/duplicates
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'chip-typeahead', example: 'freetext' }}>
							chip-typeahead/freetext
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'chip', example: 'basic' }}>
							chip/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'chip', example: 'clickable' }}>
							chip/clickable
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'chip', example: 'clickableclosable' }}>
							chip/clickableclosable
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'chip', example: 'closable' }}>
							chip/closable
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'chip', example: 'closablerenderer' }}>
							chip/closablerenderer
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'chip', example: 'disabled' }}>
							chip/disabled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'chip', example: 'icon' }}>
							chip/icon
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'constrained-input', example: 'basic' }}>
							constrained-input/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'constrained-input', example: 'username' }}>
							constrained-input/username
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'context-menu', example: 'basic' }}>
							context-menu/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'context-popup', example: 'basic' }}>
							context-popup/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'date-input', example: 'basic' }}>
							date-input/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'date-input', example: 'controlled' }}>
							date-input/controlled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'dialog', example: 'actionsdialog' }}>
							dialog/actionsdialog
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'dialog', example: 'alertdialog' }}>
							dialog/alertdialog
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'dialog', example: 'animateddialog' }}>
							dialog/animateddialog
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'dialog', example: 'basic' }}>
							dialog/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'dialog', example: 'closeabledialog' }}>
							dialog/closeabledialog
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'dialog', example: 'focustrappeddialog' }}>
							dialog/focustrappeddialog
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'dialog', example: 'modaldialog' }}>
							dialog/modaldialog
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'styles', example: 'animateddialog.m' }}>
							styles/animateddialog.m
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'styles', example: 'animateddialog.m.css.d' }}>
							styles/animateddialog.m.css.d
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'dialog', example: 'underlaydialog' }}>
							dialog/underlaydialog
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'email-input', example: 'basic' }}>
							email-input/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'floating-action-button', example: 'basic' }}>
							floating-action-button/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'floating-action-button', example: 'extended' }}>
							floating-action-button/extended
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'floating-action-button', example: 'small' }}>
							floating-action-button/small
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'form', example: 'actionform' }}>
							form/actionform
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'form', example: 'basic' }}>
							form/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'form', example: 'controlled' }}>
							form/controlled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'form', example: 'disabledfieldsform' }}>
							form/disabledfieldsform
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'form', example: 'disabledform' }}>
							form/disabledform
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'form', example: 'fillingform' }}>
							form/fillingform
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'form', example: 'initialvalueform' }}>
							form/initialvalueform
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'form', example: 'kitchensinkform' }}>
							form/kitchensinkform
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'form', example: 'requiredfieldsform' }}>
							form/requiredfieldsform
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'form', example: 'resettingform' }}>
							form/resettingform
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'form', example: 'submitform' }}>
							form/submitform
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'form', example: 'validation' }}>
							form/validation
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'global-event', example: 'basic' }}>
							global-event/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'grid', example: 'advanced' }}>
							grid/advanced
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'grid', example: 'basic' }}>
							grid/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'grid', example: 'columnresize' }}>
							grid/columnresize
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'grid', example: 'customcellrenderer' }}>
							grid/customcellrenderer
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'grid', example: 'customfilterrenderer.m' }}>
							grid/customfilterrenderer.m
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'grid', example: 'customfilterrenderer.m.css.d' }}>
							grid/customfilterrenderer.m.css.d
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'grid', example: 'customfilterrenderer' }}>
							grid/customfilterrenderer
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'grid', example: 'customrenderer.m' }}>
							grid/customrenderer.m
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'grid', example: 'customrenderer.m.css.d' }}>
							grid/customrenderer.m.css.d
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'grid', example: 'customsortrenderer.m' }}>
							grid/customsortrenderer.m
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'grid', example: 'customsortrenderer.m.css.d' }}>
							grid/customsortrenderer.m.css.d
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'grid', example: 'customsortrenderer' }}>
							grid/customsortrenderer
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'grid', example: 'data' }}>
							grid/data
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'grid', example: 'editablecells' }}>
							grid/editablecells
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'grid', example: 'filtering' }}>
							grid/filtering
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'grid', example: 'paginated' }}>
							grid/paginated
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'grid', example: 'restful' }}>
							grid/restful
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'grid', example: 'rowselection' }}>
							grid/rowselection
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'grid', example: 'sorting' }}>
							grid/sorting
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'header-card', example: 'actioncard' }}>
							header-card/actioncard
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'header-card', example: 'basic' }}>
							header-card/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'header-card', example: 'mediacard' }}>
							header-card/mediacard
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'header', example: 'basic' }}>
							header/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'header', example: 'leading' }}>
							header/leading
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'header', example: 'sticky' }}>
							header/sticky
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'header', example: 'trailing' }}>
							header/trailing
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'icon', example: 'alttext' }}>
							icon/alttext
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'icon', example: 'basic' }}>
							icon/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'icon', example: 'iconbutton' }}>
							icon/iconbutton
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'icon', example: 'sizes' }}>
							icon/sizes
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'label', example: 'basic' }}>
							label/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'label', example: 'disabledlabel' }}>
							label/disabledlabel
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'label', example: 'hiddenlabel' }}>
							label/hiddenlabel
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'label', example: 'invalidlabel' }}>
							label/invalidlabel
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'label', example: 'secondarylabel' }}>
							label/secondarylabel
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'list', example: 'basic' }}>
							list/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'list', example: 'controlled' }}>
							list/controlled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'list', example: 'customtransformer' }}>
							list/customtransformer
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'list', example: 'disabled' }}>
							list/disabled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'list', example: 'dividers' }}>
							list/dividers
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'list', example: 'fetchedresource' }}>
							list/fetchedresource
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'list', example: 'itemrenderer' }}>
							list/itemrenderer
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'list', example: 'menu' }}>
							list/menu
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'list', example: 'states' }}>
							list/states
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'loading-indicator', example: 'basic' }}>
							loading-indicator/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'native-select', example: 'basic' }}>
							native-select/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'native-select', example: 'controllednativeselect' }}>
							native-select/controllednativeselect
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'number-input', example: 'basic' }}>
							number-input/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'number-input', example: 'validation' }}>
							number-input/validation
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'outlined-button', example: 'basic' }}>
							outlined-button/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'outlined-button', example: 'disabledsubmit' }}>
							outlined-button/disabledsubmit
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'outlined-button', example: 'togglebutton' }}>
							outlined-button/togglebutton
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'pagination', example: 'basic' }}>
							pagination/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'pagination', example: 'controlled' }}>
							pagination/controlled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'pagination', example: 'pagesizeselector' }}>
							pagination/pagesizeselector
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'pagination', example: 'siblingcount' }}>
							pagination/siblingcount
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'password-input', example: 'basic' }}>
							password-input/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'password-input', example: 'norules' }}>
							password-input/norules
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'progress', example: 'basic' }}>
							progress/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'progress', example: 'progresswithchangingvalues' }}>
							progress/progresswithchangingvalues
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'progress', example: 'progresswithcustomoutput' }}>
							progress/progresswithcustomoutput
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'progress', example: 'progresswithmax' }}>
							progress/progresswithmax
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'progress', example: 'progresswithoutoutput' }}>
							progress/progresswithoutoutput
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'radio-group', example: 'basic' }}>
							radio-group/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'radio-group', example: 'controlled' }}>
							radio-group/controlled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'radio-group', example: 'customlabel' }}>
							radio-group/customlabel
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'radio-group', example: 'customrenderer' }}>
							radio-group/customrenderer
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'radio-group', example: 'initialvalue' }}>
							radio-group/initialvalue
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'radio', example: 'basic' }}>
							radio/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'radio', example: 'disabled' }}>
							radio/disabled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'radio', example: 'events' }}>
							radio/events
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'radio', example: 'labelled' }}>
							radio/labelled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'raised-button', example: 'basic' }}>
							raised-button/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'raised-button', example: 'disabledsubmit' }}>
							raised-button/disabledsubmit
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'raised-button', example: 'togglebutton' }}>
							raised-button/togglebutton
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'range-slider', example: 'basic' }}>
							range-slider/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'range-slider', example: 'controlled' }}>
							range-slider/controlled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'range-slider', example: 'disabled' }}>
							range-slider/disabled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'range-slider', example: 'events' }}>
							range-slider/events
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'range-slider', example: 'labelled' }}>
							range-slider/labelled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'range-slider', example: 'minmax' }}>
							range-slider/minmax
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'range-slider', example: 'required' }}>
							range-slider/required
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'range-slider', example: 'tooltip' }}>
							range-slider/tooltip
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'result', example: 'alert' }}>
							result/alert
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'result', example: 'basic' }}>
							result/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'result', example: 'customicon' }}>
							result/customicon
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'result', example: 'error' }}>
							result/error
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'result', example: 'success' }}>
							result/success
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'select', example: 'additionaltext' }}>
							select/additionaltext
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'select', example: 'basic' }}>
							select/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'select', example: 'controlled' }}>
							select/controlled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'select', example: 'customrenderer' }}>
							select/customrenderer
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'select', example: 'disabledselect' }}>
							select/disabledselect
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'select', example: 'requiredselect' }}>
							select/requiredselect
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'slide-pane', example: 'basic' }}>
							slide-pane/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'slide-pane', example: 'bottomalignslidepane' }}>
							slide-pane/bottomalignslidepane
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'slide-pane', example: 'common' }}>
							slide-pane/common
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'slide-pane', example: 'fixedwidthslidepane' }}>
							slide-pane/fixedwidthslidepane
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'slide-pane', example: 'leftalignslidepane' }}>
							slide-pane/leftalignslidepane
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'slide-pane', example: 'rightalignslidepane' }}>
							slide-pane/rightalignslidepane
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'slide-pane', example: 'underlayslidepane' }}>
							slide-pane/underlayslidepane
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'slider', example: 'basic' }}>
							slider/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'slider', example: 'controlled' }}>
							slider/controlled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'slider', example: 'disabledslider' }}>
							slider/disabledslider
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'slider', example: 'sliderwithcustomoutput' }}>
							slider/sliderwithcustomoutput
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'slider', example: 'sliderwithnooutput' }}>
							slider/sliderwithnooutput
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'slider', example: 'sliderwithvaliditycheck' }}>
							slider/sliderwithvaliditycheck
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'slider', example: 'verticalslider' }}>
							slider/verticalslider
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'snackbar', example: 'basic' }}>
							snackbar/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'snackbar', example: 'error' }}>
							snackbar/error
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'snackbar', example: 'leading' }}>
							snackbar/leading
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'snackbar', example: 'stacked' }}>
							snackbar/stacked
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'snackbar', example: 'success' }}>
							snackbar/success
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'speed-dial', example: 'basic' }}>
							speed-dial/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'speed-dial', example: 'customicons' }}>
							speed-dial/customicons
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'speed-dial', example: 'direction' }}>
							speed-dial/direction
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'speed-dial', example: 'titletext' }}>
							speed-dial/titletext
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'switch', example: 'basic' }}>
							switch/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'switch', example: 'disabled' }}>
							switch/disabled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'tab-container', example: 'basic' }}>
							tab-container/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'tab-container', example: 'buttonalignment' }}>
							tab-container/buttonalignment
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'tab-container', example: 'closeable' }}>
							tab-container/closeable
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'tab-container', example: 'controlled' }}>
							tab-container/controlled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'tab-container', example: 'disabled' }}>
							tab-container/disabled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'text-area', example: 'basic' }}>
							text-area/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'text-area', example: 'controlled' }}>
							text-area/controlled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'text-area', example: 'disabled' }}>
							text-area/disabled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'text-area', example: 'helpertext' }}>
							text-area/helpertext
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'text-area', example: 'hiddenlabel' }}>
							text-area/hiddenlabel
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'text-area', example: 'label' }}>
							text-area/label
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'text-area', example: 'validatedcustom' }}>
							text-area/validatedcustom
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'text-area', example: 'validatedrequired' }}>
							text-area/validatedrequired
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'text-input', example: 'basic' }}>
							text-input/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'text-input', example: 'controlled' }}>
							text-input/controlled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'text-input', example: 'disabled' }}>
							text-input/disabled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'text-input', example: 'helpertext' }}>
							text-input/helpertext
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'text-input', example: 'hiddenlabel' }}>
							text-input/hiddenlabel
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'text-input', example: 'leadingtrailing' }}>
							text-input/leadingtrailing
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'text-input', example: 'placeholder' }}>
							text-input/placeholder
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'text-input', example: 'validated' }}>
							text-input/validated
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'text-input', example: 'withlabel' }}>
							text-input/withlabel
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'three-column-layout', example: 'basic' }}>
							three-column-layout/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'time-picker', example: '12hourtime' }}>
							time-picker/12hourtime
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'time-picker', example: 'basic' }}>
							time-picker/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'time-picker', example: 'controlled' }}>
							time-picker/controlled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'time-picker', example: 'disabled' }}>
							time-picker/disabled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'time-picker', example: 'disabledmenuitems' }}>
							time-picker/disabledmenuitems
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'time-picker', example: 'required' }}>
							time-picker/required
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'time-picker', example: 'selectbysecond' }}>
							time-picker/selectbysecond
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'title-pane', example: 'basic' }}>
							title-pane/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'title-pane', example: 'controlled' }}>
							title-pane/controlled
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'title-pane', example: 'headinglevel' }}>
							title-pane/headinglevel
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'title-pane', example: 'noncloseable' }}>
							title-pane/noncloseable
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'tooltip', example: 'basic' }}>
							tooltip/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'tooltip', example: 'click' }}>
							tooltip/click
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'tooltip', example: 'focus' }}>
							tooltip/focus
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'trigger-popup', example: 'basic' }}>
							trigger-popup/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'trigger-popup', example: 'menupopup' }}>
							trigger-popup/menupopup
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'trigger-popup', example: 'setwidth' }}>
							trigger-popup/setwidth
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'styles', example: 'basic.m' }}>
							styles/basic.m
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'styles', example: 'basic.m.css.d' }}>
							styles/basic.m.css.d
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'trigger-popup', example: 'underlay' }}>
							trigger-popup/underlay
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'two-column-layout', example: 'basic' }}>
							two-column-layout/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'two-column-layout', example: 'collapsing' }}>
							two-column-layout/collapsing
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'two-column-layout', example: 'resize' }}>
							two-column-layout/resize
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'two-column-layout', example: 'trailingbias' }}>
							two-column-layout/trailingbias
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'typeahead', example: 'basic' }}>
							typeahead/basic
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'typeahead', example: 'freetext' }}>
							typeahead/freetext
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'typeahead', example: 'remotesource' }}>
							typeahead/remotesource
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'typeahead', example: 'states' }}>
							typeahead/states
						</Link>
					</li>
					<li>
						<Link to="main" params={{ widget: 'typeahead', example: 'validation' }}>
							typeahead/validation
						</Link>
					</li>
				</ul>
			</div>
			<div classes={['col', 'main']}>
				<Outlet id="main">
					{{
						main: (matchDetails) => {
							if (matchDetails.params.widget === 'accordion' && matchDetails.params.example === 'basic') {
								return <AccordionBasic />;
							}

							if (
								matchDetails.params.widget === 'accordion' &&
								matchDetails.params.example === 'exclusive'
							) {
								return <AccordionExclusive />;
							}

							if (matchDetails.params.widget === 'avatar' && matchDetails.params.example === 'basic') {
								return <AvatarBasic />;
							}

							if (matchDetails.params.widget === 'avatar' && matchDetails.params.example === 'icon') {
								return <AvatarIcon />;
							}

							if (matchDetails.params.widget === 'avatar' && matchDetails.params.example === 'image') {
								return <AvatarImage />;
							}

							if (
								matchDetails.params.widget === 'avatar' &&
								matchDetails.params.example === 'secondary'
							) {
								return <AvatarSecondary />;
							}

							if (matchDetails.params.widget === 'avatar' && matchDetails.params.example === 'size') {
								return <AvatarSize />;
							}

							if (matchDetails.params.widget === 'avatar' && matchDetails.params.example === 'variant') {
								return <AvatarVariant />;
							}

							if (
								matchDetails.params.widget === 'breadcrumb-group' &&
								matchDetails.params.example === 'basic'
							) {
								return <BreadcrumbgroupBasic />;
							}

							if (
								matchDetails.params.widget === 'breadcrumb-group' &&
								matchDetails.params.example === 'customrenderer'
							) {
								return <BreadcrumbgroupCustomRenderer />;
							}

							if (matchDetails.params.widget === 'button' && matchDetails.params.example === 'basic') {
								return <ButtonBasic />;
							}

							if (
								matchDetails.params.widget === 'button' &&
								matchDetails.params.example === 'disabledsubmit'
							) {
								return <ButtonDisabledSubmit />;
							}

							if (
								matchDetails.params.widget === 'button' &&
								matchDetails.params.example === 'togglebutton'
							) {
								return <ButtonToggleButton />;
							}

							if (matchDetails.params.widget === 'calendar' && matchDetails.params.example === 'basic') {
								return <CalendarBasic />;
							}

							if (
								matchDetails.params.widget === 'calendar' &&
								matchDetails.params.example === 'customfirstweekday'
							) {
								return <CalendarCustomFirstWeekDay />;
							}

							if (
								matchDetails.params.widget === 'calendar' &&
								matchDetails.params.example === 'fullycontrolled'
							) {
								return <CalendarFullyControlled />;
							}

							if (
								matchDetails.params.widget === 'calendar' &&
								matchDetails.params.example === 'initialmonthandyear'
							) {
								return <CalendarInitialMonthAndYear />;
							}

							if (
								matchDetails.params.widget === 'calendar' &&
								matchDetails.params.example === 'limitedrange'
							) {
								return <CalendarLimitedRange />;
							}

							if (
								matchDetails.params.widget === 'card' &&
								matchDetails.params.example === 'actionbuttons'
							) {
								return <CardActionButtons />;
							}

							if (
								matchDetails.params.widget === 'card' &&
								matchDetails.params.example === 'actionbuttonsandicons'
							) {
								return <CardActionButtonsAndIcons />;
							}

							if (
								matchDetails.params.widget === 'card' &&
								matchDetails.params.example === 'actionicons'
							) {
								return <CardActionIcons />;
							}

							if (matchDetails.params.widget === 'card' && matchDetails.params.example === 'basic') {
								return <CardBasic />;
							}

							if (
								matchDetails.params.widget === 'card' &&
								matchDetails.params.example === 'cardcombined'
							) {
								return <CardCardCombined />;
							}

							if (
								matchDetails.params.widget === 'card' &&
								matchDetails.params.example === 'cardwithmediacontent'
							) {
								return <CardCardWithMediaContent />;
							}

							if (
								matchDetails.params.widget === 'card' &&
								matchDetails.params.example === 'cardwithmediarectangle'
							) {
								return <CardCardWithMediaRectangle />;
							}

							if (
								matchDetails.params.widget === 'card' &&
								matchDetails.params.example === 'cardwithmediasquare'
							) {
								return <CardCardWithMediaSquare />;
							}

							if (matchDetails.params.widget === 'img' && matchDetails.params.example === 'card-photo') {
								return <Imgcard-photo />;
							}

							if (
								matchDetails.params.widget === 'checkbox-group' &&
								matchDetails.params.example === 'basic'
							) {
								return <CheckboxgroupBasic />;
							}

							if (
								matchDetails.params.widget === 'checkbox-group' &&
								matchDetails.params.example === 'controlled'
							) {
								return <CheckboxgroupControlled />;
							}

							if (
								matchDetails.params.widget === 'checkbox-group' &&
								matchDetails.params.example === 'customlabel'
							) {
								return <CheckboxgroupCustomLabel />;
							}

							if (
								matchDetails.params.widget === 'checkbox-group' &&
								matchDetails.params.example === 'customrenderer'
							) {
								return <CheckboxgroupCustomRenderer />;
							}

							if (
								matchDetails.params.widget === 'checkbox-group' &&
								matchDetails.params.example === 'initialvalue'
							) {
								return <CheckboxgroupInitialValue />;
							}

							if (matchDetails.params.widget === 'checkbox' && matchDetails.params.example === 'basic') {
								return <CheckboxBasic />;
							}

							if (
								matchDetails.params.widget === 'checkbox' &&
								matchDetails.params.example === 'customlabel'
							) {
								return <CheckboxCustomLabel />;
							}

							if (
								matchDetails.params.widget === 'checkbox' &&
								matchDetails.params.example === 'disabled'
							) {
								return <CheckboxDisabled />;
							}

							if (
								matchDetails.params.widget === 'checkbox' &&
								matchDetails.params.example === 'readonly'
							) {
								return <CheckboxReadonly />;
							}

							if (
								matchDetails.params.widget === 'chip-typeahead' &&
								matchDetails.params.example === 'basic'
							) {
								return <ChiptypeaheadBasic />;
							}

							if (
								matchDetails.params.widget === 'chip-typeahead' &&
								matchDetails.params.example === 'bottomplacement'
							) {
								return <ChiptypeaheadBottomPlacement />;
							}

							if (
								matchDetails.params.widget === 'chip-typeahead' &&
								matchDetails.params.example === 'controlled'
							) {
								return <ChiptypeaheadControlled />;
							}

							if (
								matchDetails.params.widget === 'chip-typeahead' &&
								matchDetails.params.example === 'customrenderer'
							) {
								return <ChiptypeaheadCustomRenderer />;
							}

							if (
								matchDetails.params.widget === 'chip-typeahead' &&
								matchDetails.params.example === 'disabled'
							) {
								return <ChiptypeaheadDisabled />;
							}

							if (
								matchDetails.params.widget === 'chip-typeahead' &&
								matchDetails.params.example === 'duplicates'
							) {
								return <ChiptypeaheadDuplicates />;
							}

							if (
								matchDetails.params.widget === 'chip-typeahead' &&
								matchDetails.params.example === 'freetext'
							) {
								return <ChiptypeaheadFreeText />;
							}

							if (matchDetails.params.widget === 'chip' && matchDetails.params.example === 'basic') {
								return <ChipBasic />;
							}

							if (matchDetails.params.widget === 'chip' && matchDetails.params.example === 'clickable') {
								return <ChipClickable />;
							}

							if (
								matchDetails.params.widget === 'chip' &&
								matchDetails.params.example === 'clickableclosable'
							) {
								return <ChipClickableClosable />;
							}

							if (matchDetails.params.widget === 'chip' && matchDetails.params.example === 'closable') {
								return <ChipClosable />;
							}

							if (
								matchDetails.params.widget === 'chip' &&
								matchDetails.params.example === 'closablerenderer'
							) {
								return <ChipClosableRenderer />;
							}

							if (matchDetails.params.widget === 'chip' && matchDetails.params.example === 'disabled') {
								return <ChipDisabled />;
							}

							if (matchDetails.params.widget === 'chip' && matchDetails.params.example === 'icon') {
								return <ChipIcon />;
							}

							if (
								matchDetails.params.widget === 'constrained-input' &&
								matchDetails.params.example === 'basic'
							) {
								return <ConstrainedinputBasic />;
							}

							if (
								matchDetails.params.widget === 'constrained-input' &&
								matchDetails.params.example === 'username'
							) {
								return <ConstrainedinputUsername />;
							}

							if (
								matchDetails.params.widget === 'context-menu' &&
								matchDetails.params.example === 'basic'
							) {
								return <ContextmenuBasic />;
							}

							if (
								matchDetails.params.widget === 'context-popup' &&
								matchDetails.params.example === 'basic'
							) {
								return <ContextpopupBasic />;
							}

							if (
								matchDetails.params.widget === 'date-input' &&
								matchDetails.params.example === 'basic'
							) {
								return <DateinputBasic />;
							}

							if (
								matchDetails.params.widget === 'date-input' &&
								matchDetails.params.example === 'controlled'
							) {
								return <DateinputControlled />;
							}

							if (
								matchDetails.params.widget === 'dialog' &&
								matchDetails.params.example === 'actionsdialog'
							) {
								return <DialogActionsDialog />;
							}

							if (
								matchDetails.params.widget === 'dialog' &&
								matchDetails.params.example === 'alertdialog'
							) {
								return <DialogAlertDialog />;
							}

							if (
								matchDetails.params.widget === 'dialog' &&
								matchDetails.params.example === 'animateddialog'
							) {
								return <DialogAnimatedDialog />;
							}

							if (matchDetails.params.widget === 'dialog' && matchDetails.params.example === 'basic') {
								return <DialogBasic />;
							}

							if (
								matchDetails.params.widget === 'dialog' &&
								matchDetails.params.example === 'closeabledialog'
							) {
								return <DialogCloseableDialog />;
							}

							if (
								matchDetails.params.widget === 'dialog' &&
								matchDetails.params.example === 'focustrappeddialog'
							) {
								return <DialogFocusTrappedDialog />;
							}

							if (
								matchDetails.params.widget === 'dialog' &&
								matchDetails.params.example === 'modaldialog'
							) {
								return <DialogModalDialog />;
							}

							if (
								matchDetails.params.widget === 'dialog' &&
								matchDetails.params.example === 'underlaydialog'
							) {
								return <DialogUnderlayDialog />;
							}

							if (
								matchDetails.params.widget === 'email-input' &&
								matchDetails.params.example === 'basic'
							) {
								return <EmailinputBasic />;
							}

							if (
								matchDetails.params.widget === 'floating-action-button' &&
								matchDetails.params.example === 'basic'
							) {
								return <FloatingactionbuttonBasic />;
							}

							if (
								matchDetails.params.widget === 'floating-action-button' &&
								matchDetails.params.example === 'extended'
							) {
								return <FloatingactionbuttonExtended />;
							}

							if (
								matchDetails.params.widget === 'floating-action-button' &&
								matchDetails.params.example === 'small'
							) {
								return <FloatingactionbuttonSmall />;
							}

							if (matchDetails.params.widget === 'form' && matchDetails.params.example === 'actionform') {
								return <FormActionForm />;
							}

							if (matchDetails.params.widget === 'form' && matchDetails.params.example === 'basic') {
								return <FormBasic />;
							}

							if (matchDetails.params.widget === 'form' && matchDetails.params.example === 'controlled') {
								return <FormControlled />;
							}

							if (
								matchDetails.params.widget === 'form' &&
								matchDetails.params.example === 'disabledfieldsform'
							) {
								return <FormDisabledFieldsForm />;
							}

							if (
								matchDetails.params.widget === 'form' &&
								matchDetails.params.example === 'disabledform'
							) {
								return <FormDisabledForm />;
							}

							if (
								matchDetails.params.widget === 'form' &&
								matchDetails.params.example === 'fillingform'
							) {
								return <FormFillingForm />;
							}

							if (
								matchDetails.params.widget === 'form' &&
								matchDetails.params.example === 'initialvalueform'
							) {
								return <FormInitialValueForm />;
							}

							if (
								matchDetails.params.widget === 'form' &&
								matchDetails.params.example === 'kitchensinkform'
							) {
								return <FormKitchenSinkForm />;
							}

							if (
								matchDetails.params.widget === 'form' &&
								matchDetails.params.example === 'requiredfieldsform'
							) {
								return <FormRequiredFieldsForm />;
							}

							if (
								matchDetails.params.widget === 'form' &&
								matchDetails.params.example === 'resettingform'
							) {
								return <FormResettingForm />;
							}

							if (matchDetails.params.widget === 'form' && matchDetails.params.example === 'submitform') {
								return <FormSubmitForm />;
							}

							if (matchDetails.params.widget === 'form' && matchDetails.params.example === 'validation') {
								return <FormValidation />;
							}

							if (
								matchDetails.params.widget === 'global-event' &&
								matchDetails.params.example === 'basic'
							) {
								return <GlobaleventBasic />;
							}

							if (matchDetails.params.widget === 'grid' && matchDetails.params.example === 'advanced') {
								return <GridAdvanced />;
							}

							if (matchDetails.params.widget === 'grid' && matchDetails.params.example === 'basic') {
								return <GridBasic />;
							}

							if (
								matchDetails.params.widget === 'grid' &&
								matchDetails.params.example === 'columnresize'
							) {
								return <GridColumnResize />;
							}

							if (
								matchDetails.params.widget === 'grid' &&
								matchDetails.params.example === 'customcellrenderer'
							) {
								return <GridCustomCellRenderer />;
							}

							if (
								matchDetails.params.widget === 'grid' &&
								matchDetails.params.example === 'customfilterrenderer'
							) {
								return <GridCustomFilterRenderer />;
							}

							if (
								matchDetails.params.widget === 'grid' &&
								matchDetails.params.example === 'customsortrenderer'
							) {
								return <GridCustomSortRenderer />;
							}

							if (
								matchDetails.params.widget === 'grid' &&
								matchDetails.params.example === 'editablecells'
							) {
								return <GridEditableCells />;
							}

							if (matchDetails.params.widget === 'grid' && matchDetails.params.example === 'filtering') {
								return <GridFiltering />;
							}

							if (matchDetails.params.widget === 'grid' && matchDetails.params.example === 'paginated') {
								return <GridPaginated />;
							}

							if (matchDetails.params.widget === 'grid' && matchDetails.params.example === 'restful') {
								return <GridRestful />;
							}

							if (
								matchDetails.params.widget === 'grid' &&
								matchDetails.params.example === 'rowselection'
							) {
								return <GridRowSelection />;
							}

							if (matchDetails.params.widget === 'grid' && matchDetails.params.example === 'sorting') {
								return <GridSorting />;
							}

							if (
								matchDetails.params.widget === 'header-card' &&
								matchDetails.params.example === 'actioncard'
							) {
								return <HeadercardActionCard />;
							}

							if (
								matchDetails.params.widget === 'header-card' &&
								matchDetails.params.example === 'basic'
							) {
								return <HeadercardBasic />;
							}

							if (
								matchDetails.params.widget === 'header-card' &&
								matchDetails.params.example === 'mediacard'
							) {
								return <HeadercardMediaCard />;
							}

							if (matchDetails.params.widget === 'header' && matchDetails.params.example === 'basic') {
								return <HeaderBasic />;
							}

							if (matchDetails.params.widget === 'header' && matchDetails.params.example === 'leading') {
								return <HeaderLeading />;
							}

							if (matchDetails.params.widget === 'header' && matchDetails.params.example === 'sticky') {
								return <HeaderSticky />;
							}

							if (matchDetails.params.widget === 'header' && matchDetails.params.example === 'trailing') {
								return <HeaderTrailing />;
							}

							if (matchDetails.params.widget === 'icon' && matchDetails.params.example === 'alttext') {
								return <IconAltText />;
							}

							if (matchDetails.params.widget === 'icon' && matchDetails.params.example === 'basic') {
								return <IconBasic />;
							}

							if (matchDetails.params.widget === 'icon' && matchDetails.params.example === 'iconbutton') {
								return <IconIconButton />;
							}

							if (matchDetails.params.widget === 'icon' && matchDetails.params.example === 'sizes') {
								return <IconSizes />;
							}

							if (matchDetails.params.widget === 'label' && matchDetails.params.example === 'basic') {
								return <LabelBasic />;
							}

							if (
								matchDetails.params.widget === 'label' &&
								matchDetails.params.example === 'disabledlabel'
							) {
								return <LabelDisabledLabel />;
							}

							if (
								matchDetails.params.widget === 'label' &&
								matchDetails.params.example === 'hiddenlabel'
							) {
								return <LabelHiddenLabel />;
							}

							if (
								matchDetails.params.widget === 'label' &&
								matchDetails.params.example === 'invalidlabel'
							) {
								return <LabelInvalidLabel />;
							}

							if (
								matchDetails.params.widget === 'label' &&
								matchDetails.params.example === 'secondarylabel'
							) {
								return <LabelSecondaryLabel />;
							}

							if (matchDetails.params.widget === 'list' && matchDetails.params.example === 'basic') {
								return <ListBasic />;
							}

							if (matchDetails.params.widget === 'list' && matchDetails.params.example === 'controlled') {
								return <ListControlled />;
							}

							if (
								matchDetails.params.widget === 'list' &&
								matchDetails.params.example === 'customtransformer'
							) {
								return <ListCustomTransformer />;
							}

							if (matchDetails.params.widget === 'list' && matchDetails.params.example === 'disabled') {
								return <ListDisabled />;
							}

							if (matchDetails.params.widget === 'list' && matchDetails.params.example === 'dividers') {
								return <ListDividers />;
							}

							if (
								matchDetails.params.widget === 'list' &&
								matchDetails.params.example === 'fetchedresource'
							) {
								return <ListFetchedResource />;
							}

							if (
								matchDetails.params.widget === 'list' &&
								matchDetails.params.example === 'itemrenderer'
							) {
								return <ListItemRenderer />;
							}

							if (matchDetails.params.widget === 'list' && matchDetails.params.example === 'menu') {
								return <ListMenu />;
							}

							if (
								matchDetails.params.widget === 'loading-indicator' &&
								matchDetails.params.example === 'basic'
							) {
								return <LoadingindicatorBasic />;
							}

							if (
								matchDetails.params.widget === 'native-select' &&
								matchDetails.params.example === 'basic'
							) {
								return <NativeselectBasic />;
							}

							if (
								matchDetails.params.widget === 'native-select' &&
								matchDetails.params.example === 'controllednativeselect'
							) {
								return <NativeselectControlledNativeSelect />;
							}

							if (
								matchDetails.params.widget === 'number-input' &&
								matchDetails.params.example === 'basic'
							) {
								return <NumberinputBasic />;
							}

							if (
								matchDetails.params.widget === 'number-input' &&
								matchDetails.params.example === 'validation'
							) {
								return <NumberinputValidation />;
							}

							if (
								matchDetails.params.widget === 'outlined-button' &&
								matchDetails.params.example === 'basic'
							) {
								return <OutlinedbuttonBasic />;
							}

							if (
								matchDetails.params.widget === 'outlined-button' &&
								matchDetails.params.example === 'disabledsubmit'
							) {
								return <OutlinedbuttonDisabledSubmit />;
							}

							if (
								matchDetails.params.widget === 'outlined-button' &&
								matchDetails.params.example === 'togglebutton'
							) {
								return <OutlinedbuttonToggleButton />;
							}

							if (
								matchDetails.params.widget === 'pagination' &&
								matchDetails.params.example === 'basic'
							) {
								return <PaginationBasic />;
							}

							if (
								matchDetails.params.widget === 'pagination' &&
								matchDetails.params.example === 'controlled'
							) {
								return <PaginationControlled />;
							}

							if (
								matchDetails.params.widget === 'pagination' &&
								matchDetails.params.example === 'pagesizeselector'
							) {
								return <PaginationPageSizeSelector />;
							}

							if (
								matchDetails.params.widget === 'pagination' &&
								matchDetails.params.example === 'siblingcount'
							) {
								return <PaginationSiblingCount />;
							}

							if (
								matchDetails.params.widget === 'password-input' &&
								matchDetails.params.example === 'basic'
							) {
								return <PasswordinputBasic />;
							}

							if (
								matchDetails.params.widget === 'password-input' &&
								matchDetails.params.example === 'norules'
							) {
								return <PasswordinputNoRules />;
							}

							if (matchDetails.params.widget === 'progress' && matchDetails.params.example === 'basic') {
								return <ProgressBasic />;
							}

							if (
								matchDetails.params.widget === 'progress' &&
								matchDetails.params.example === 'progresswithchangingvalues'
							) {
								return <ProgressProgressWithChangingValues />;
							}

							if (
								matchDetails.params.widget === 'progress' &&
								matchDetails.params.example === 'progresswithcustomoutput'
							) {
								return <ProgressProgressWithCustomOutput />;
							}

							if (
								matchDetails.params.widget === 'progress' &&
								matchDetails.params.example === 'progresswithmax'
							) {
								return <ProgressProgressWithMax />;
							}

							if (
								matchDetails.params.widget === 'progress' &&
								matchDetails.params.example === 'progresswithoutoutput'
							) {
								return <ProgressProgressWithoutOutput />;
							}

							if (
								matchDetails.params.widget === 'radio-group' &&
								matchDetails.params.example === 'basic'
							) {
								return <RadiogroupBasic />;
							}

							if (
								matchDetails.params.widget === 'radio-group' &&
								matchDetails.params.example === 'controlled'
							) {
								return <RadiogroupControlled />;
							}

							if (
								matchDetails.params.widget === 'radio-group' &&
								matchDetails.params.example === 'customlabel'
							) {
								return <RadiogroupCustomLabel />;
							}

							if (
								matchDetails.params.widget === 'radio-group' &&
								matchDetails.params.example === 'customrenderer'
							) {
								return <RadiogroupCustomRenderer />;
							}

							if (
								matchDetails.params.widget === 'radio-group' &&
								matchDetails.params.example === 'initialvalue'
							) {
								return <RadiogroupInitialValue />;
							}

							if (matchDetails.params.widget === 'radio' && matchDetails.params.example === 'basic') {
								return <RadioBasic />;
							}

							if (matchDetails.params.widget === 'radio' && matchDetails.params.example === 'disabled') {
								return <RadioDisabled />;
							}

							if (matchDetails.params.widget === 'radio' && matchDetails.params.example === 'events') {
								return <RadioEvents />;
							}

							if (matchDetails.params.widget === 'radio' && matchDetails.params.example === 'labelled') {
								return <RadioLabelled />;
							}

							if (
								matchDetails.params.widget === 'raised-button' &&
								matchDetails.params.example === 'basic'
							) {
								return <RaisedbuttonBasic />;
							}

							if (
								matchDetails.params.widget === 'raised-button' &&
								matchDetails.params.example === 'disabledsubmit'
							) {
								return <RaisedbuttonDisabledSubmit />;
							}

							if (
								matchDetails.params.widget === 'raised-button' &&
								matchDetails.params.example === 'togglebutton'
							) {
								return <RaisedbuttonToggleButton />;
							}

							if (
								matchDetails.params.widget === 'range-slider' &&
								matchDetails.params.example === 'basic'
							) {
								return <RangesliderBasic />;
							}

							if (
								matchDetails.params.widget === 'range-slider' &&
								matchDetails.params.example === 'controlled'
							) {
								return <RangesliderControlled />;
							}

							if (
								matchDetails.params.widget === 'range-slider' &&
								matchDetails.params.example === 'disabled'
							) {
								return <RangesliderDisabled />;
							}

							if (
								matchDetails.params.widget === 'range-slider' &&
								matchDetails.params.example === 'events'
							) {
								return <RangesliderEvents />;
							}

							if (
								matchDetails.params.widget === 'range-slider' &&
								matchDetails.params.example === 'labelled'
							) {
								return <RangesliderLabelled />;
							}

							if (
								matchDetails.params.widget === 'range-slider' &&
								matchDetails.params.example === 'minmax'
							) {
								return <RangesliderMinMax />;
							}

							if (
								matchDetails.params.widget === 'range-slider' &&
								matchDetails.params.example === 'required'
							) {
								return <RangesliderRequired />;
							}

							if (
								matchDetails.params.widget === 'range-slider' &&
								matchDetails.params.example === 'tooltip'
							) {
								return <RangesliderTooltip />;
							}

							if (matchDetails.params.widget === 'result' && matchDetails.params.example === 'alert') {
								return <ResultAlert />;
							}

							if (matchDetails.params.widget === 'result' && matchDetails.params.example === 'basic') {
								return <ResultBasic />;
							}

							if (
								matchDetails.params.widget === 'result' &&
								matchDetails.params.example === 'customicon'
							) {
								return <ResultCustomIcon />;
							}

							if (matchDetails.params.widget === 'result' && matchDetails.params.example === 'error') {
								return <ResultError />;
							}

							if (matchDetails.params.widget === 'result' && matchDetails.params.example === 'success') {
								return <ResultSuccess />;
							}

							if (
								matchDetails.params.widget === 'select' &&
								matchDetails.params.example === 'additionaltext'
							) {
								return <SelectAdditionalText />;
							}

							if (matchDetails.params.widget === 'select' && matchDetails.params.example === 'basic') {
								return <SelectBasic />;
							}

							if (
								matchDetails.params.widget === 'select' &&
								matchDetails.params.example === 'controlled'
							) {
								return <SelectControlled />;
							}

							if (
								matchDetails.params.widget === 'select' &&
								matchDetails.params.example === 'customrenderer'
							) {
								return <SelectCustomRenderer />;
							}

							if (
								matchDetails.params.widget === 'select' &&
								matchDetails.params.example === 'disabledselect'
							) {
								return <SelectDisabledSelect />;
							}

							if (
								matchDetails.params.widget === 'select' &&
								matchDetails.params.example === 'requiredselect'
							) {
								return <SelectRequiredSelect />;
							}

							if (
								matchDetails.params.widget === 'slide-pane' &&
								matchDetails.params.example === 'basic'
							) {
								return <SlidepaneBasic />;
							}

							if (
								matchDetails.params.widget === 'slide-pane' &&
								matchDetails.params.example === 'bottomalignslidepane'
							) {
								return <SlidepaneBottomAlignSlidePane />;
							}

							if (
								matchDetails.params.widget === 'slide-pane' &&
								matchDetails.params.example === 'fixedwidthslidepane'
							) {
								return <SlidepaneFixedWidthSlidePane />;
							}

							if (
								matchDetails.params.widget === 'slide-pane' &&
								matchDetails.params.example === 'leftalignslidepane'
							) {
								return <SlidepaneLeftAlignSlidePane />;
							}

							if (
								matchDetails.params.widget === 'slide-pane' &&
								matchDetails.params.example === 'rightalignslidepane'
							) {
								return <SlidepaneRightAlignSlidePane />;
							}

							if (
								matchDetails.params.widget === 'slide-pane' &&
								matchDetails.params.example === 'underlayslidepane'
							) {
								return <SlidepaneUnderlaySlidePane />;
							}

							if (matchDetails.params.widget === 'slider' && matchDetails.params.example === 'basic') {
								return <SliderBasic />;
							}

							if (
								matchDetails.params.widget === 'slider' &&
								matchDetails.params.example === 'controlled'
							) {
								return <SliderControlled />;
							}

							if (
								matchDetails.params.widget === 'slider' &&
								matchDetails.params.example === 'disabledslider'
							) {
								return <SliderDisabledSlider />;
							}

							if (
								matchDetails.params.widget === 'slider' &&
								matchDetails.params.example === 'sliderwithcustomoutput'
							) {
								return <SliderSliderWithCustomOutput />;
							}

							if (
								matchDetails.params.widget === 'slider' &&
								matchDetails.params.example === 'sliderwithnooutput'
							) {
								return <SliderSliderWithNoOutput />;
							}

							if (
								matchDetails.params.widget === 'slider' &&
								matchDetails.params.example === 'sliderwithvaliditycheck'
							) {
								return <SliderSliderWithValidityCheck />;
							}

							if (
								matchDetails.params.widget === 'slider' &&
								matchDetails.params.example === 'verticalslider'
							) {
								return <SliderVerticalSlider />;
							}

							if (matchDetails.params.widget === 'snackbar' && matchDetails.params.example === 'basic') {
								return <SnackbarBasic />;
							}

							if (matchDetails.params.widget === 'snackbar' && matchDetails.params.example === 'error') {
								return <SnackbarError />;
							}

							if (
								matchDetails.params.widget === 'snackbar' &&
								matchDetails.params.example === 'leading'
							) {
								return <SnackbarLeading />;
							}

							if (
								matchDetails.params.widget === 'snackbar' &&
								matchDetails.params.example === 'stacked'
							) {
								return <SnackbarStacked />;
							}

							if (
								matchDetails.params.widget === 'snackbar' &&
								matchDetails.params.example === 'success'
							) {
								return <SnackbarSuccess />;
							}

							if (
								matchDetails.params.widget === 'speed-dial' &&
								matchDetails.params.example === 'basic'
							) {
								return <SpeeddialBasic />;
							}

							if (
								matchDetails.params.widget === 'speed-dial' &&
								matchDetails.params.example === 'customicons'
							) {
								return <SpeeddialCustomIcons />;
							}

							if (
								matchDetails.params.widget === 'speed-dial' &&
								matchDetails.params.example === 'direction'
							) {
								return <SpeeddialDirection />;
							}

							if (
								matchDetails.params.widget === 'speed-dial' &&
								matchDetails.params.example === 'titletext'
							) {
								return <SpeeddialTitleText />;
							}

							if (matchDetails.params.widget === 'switch' && matchDetails.params.example === 'basic') {
								return <SwitchBasic />;
							}

							if (matchDetails.params.widget === 'switch' && matchDetails.params.example === 'disabled') {
								return <SwitchDisabled />;
							}

							if (
								matchDetails.params.widget === 'tab-container' &&
								matchDetails.params.example === 'basic'
							) {
								return <TabcontainerBasic />;
							}

							if (
								matchDetails.params.widget === 'tab-container' &&
								matchDetails.params.example === 'buttonalignment'
							) {
								return <TabcontainerButtonAlignment />;
							}

							if (
								matchDetails.params.widget === 'tab-container' &&
								matchDetails.params.example === 'closeable'
							) {
								return <TabcontainerCloseable />;
							}

							if (
								matchDetails.params.widget === 'tab-container' &&
								matchDetails.params.example === 'controlled'
							) {
								return <TabcontainerControlled />;
							}

							if (
								matchDetails.params.widget === 'tab-container' &&
								matchDetails.params.example === 'disabled'
							) {
								return <TabcontainerDisabled />;
							}

							if (matchDetails.params.widget === 'text-area' && matchDetails.params.example === 'basic') {
								return <TextareaBasic />;
							}

							if (
								matchDetails.params.widget === 'text-area' &&
								matchDetails.params.example === 'controlled'
							) {
								return <TextareaControlled />;
							}

							if (
								matchDetails.params.widget === 'text-area' &&
								matchDetails.params.example === 'disabled'
							) {
								return <TextareaDisabled />;
							}

							if (
								matchDetails.params.widget === 'text-area' &&
								matchDetails.params.example === 'helpertext'
							) {
								return <TextareaHelperText />;
							}

							if (
								matchDetails.params.widget === 'text-area' &&
								matchDetails.params.example === 'hiddenlabel'
							) {
								return <TextareaHiddenLabel />;
							}

							if (matchDetails.params.widget === 'text-area' && matchDetails.params.example === 'label') {
								return <TextareaLabel />;
							}

							if (
								matchDetails.params.widget === 'text-area' &&
								matchDetails.params.example === 'validatedcustom'
							) {
								return <TextareaValidatedCustom />;
							}

							if (
								matchDetails.params.widget === 'text-area' &&
								matchDetails.params.example === 'validatedrequired'
							) {
								return <TextareaValidatedRequired />;
							}

							if (
								matchDetails.params.widget === 'text-input' &&
								matchDetails.params.example === 'basic'
							) {
								return <TextinputBasic />;
							}

							if (
								matchDetails.params.widget === 'text-input' &&
								matchDetails.params.example === 'controlled'
							) {
								return <TextinputControlled />;
							}

							if (
								matchDetails.params.widget === 'text-input' &&
								matchDetails.params.example === 'disabled'
							) {
								return <TextinputDisabled />;
							}

							if (
								matchDetails.params.widget === 'text-input' &&
								matchDetails.params.example === 'helpertext'
							) {
								return <TextinputHelperText />;
							}

							if (
								matchDetails.params.widget === 'text-input' &&
								matchDetails.params.example === 'hiddenlabel'
							) {
								return <TextinputHiddenLabel />;
							}

							if (
								matchDetails.params.widget === 'text-input' &&
								matchDetails.params.example === 'leadingtrailing'
							) {
								return <TextinputLeadingTrailing />;
							}

							if (
								matchDetails.params.widget === 'text-input' &&
								matchDetails.params.example === 'placeholder'
							) {
								return <TextinputPlaceholder />;
							}

							if (
								matchDetails.params.widget === 'text-input' &&
								matchDetails.params.example === 'validated'
							) {
								return <TextinputValidated />;
							}

							if (
								matchDetails.params.widget === 'text-input' &&
								matchDetails.params.example === 'withlabel'
							) {
								return <TextinputWithLabel />;
							}

							if (
								matchDetails.params.widget === 'three-column-layout' &&
								matchDetails.params.example === 'basic'
							) {
								return <ThreecolumnlayoutBasic />;
							}

							if (
								matchDetails.params.widget === 'time-picker' &&
								matchDetails.params.example === '12hourtime'
							) {
								return <Timepicker12HourTime />;
							}

							if (
								matchDetails.params.widget === 'time-picker' &&
								matchDetails.params.example === 'basic'
							) {
								return <TimepickerBasic />;
							}

							if (
								matchDetails.params.widget === 'time-picker' &&
								matchDetails.params.example === 'controlled'
							) {
								return <TimepickerControlled />;
							}

							if (
								matchDetails.params.widget === 'time-picker' &&
								matchDetails.params.example === 'disabled'
							) {
								return <TimepickerDisabled />;
							}

							if (
								matchDetails.params.widget === 'time-picker' &&
								matchDetails.params.example === 'disabledmenuitems'
							) {
								return <TimepickerDisabledMenuItems />;
							}

							if (
								matchDetails.params.widget === 'time-picker' &&
								matchDetails.params.example === 'required'
							) {
								return <TimepickerRequired />;
							}

							if (
								matchDetails.params.widget === 'time-picker' &&
								matchDetails.params.example === 'selectbysecond'
							) {
								return <TimepickerSelectBySecond />;
							}

							if (
								matchDetails.params.widget === 'title-pane' &&
								matchDetails.params.example === 'basic'
							) {
								return <TitlepaneBasic />;
							}

							if (
								matchDetails.params.widget === 'title-pane' &&
								matchDetails.params.example === 'controlled'
							) {
								return <TitlepaneControlled />;
							}

							if (
								matchDetails.params.widget === 'title-pane' &&
								matchDetails.params.example === 'headinglevel'
							) {
								return <TitlepaneHeadingLevel />;
							}

							if (
								matchDetails.params.widget === 'title-pane' &&
								matchDetails.params.example === 'noncloseable'
							) {
								return <TitlepaneNonCloseable />;
							}

							if (matchDetails.params.widget === 'tooltip' && matchDetails.params.example === 'basic') {
								return <TooltipBasic />;
							}

							if (matchDetails.params.widget === 'tooltip' && matchDetails.params.example === 'click') {
								return <TooltipClick />;
							}

							if (matchDetails.params.widget === 'tooltip' && matchDetails.params.example === 'focus') {
								return <TooltipFocus />;
							}

							if (
								matchDetails.params.widget === 'trigger-popup' &&
								matchDetails.params.example === 'basic'
							) {
								return <TriggerpopupBasic />;
							}

							if (
								matchDetails.params.widget === 'trigger-popup' &&
								matchDetails.params.example === 'menupopup'
							) {
								return <TriggerpopupMenuPopup />;
							}

							if (
								matchDetails.params.widget === 'trigger-popup' &&
								matchDetails.params.example === 'setwidth'
							) {
								return <TriggerpopupSetWidth />;
							}

							if (
								matchDetails.params.widget === 'trigger-popup' &&
								matchDetails.params.example === 'underlay'
							) {
								return <TriggerpopupUnderlay />;
							}

							if (
								matchDetails.params.widget === 'two-column-layout' &&
								matchDetails.params.example === 'basic'
							) {
								return <TwocolumnlayoutBasic />;
							}

							if (
								matchDetails.params.widget === 'two-column-layout' &&
								matchDetails.params.example === 'collapsing'
							) {
								return <TwocolumnlayoutCollapsing />;
							}

							if (
								matchDetails.params.widget === 'two-column-layout' &&
								matchDetails.params.example === 'resize'
							) {
								return <TwocolumnlayoutResize />;
							}

							if (
								matchDetails.params.widget === 'two-column-layout' &&
								matchDetails.params.example === 'trailingbias'
							) {
								return <TwocolumnlayoutTrailingBias />;
							}

							if (matchDetails.params.widget === 'typeahead' && matchDetails.params.example === 'basic') {
								return <TypeaheadBasic />;
							}

							if (
								matchDetails.params.widget === 'typeahead' &&
								matchDetails.params.example === 'freetext'
							) {
								return <TypeaheadFreeText />;
							}

							if (
								matchDetails.params.widget === 'typeahead' &&
								matchDetails.params.example === 'remotesource'
							) {
								return <TypeaheadRemoteSource />;
							}

							if (
								matchDetails.params.widget === 'typeahead' &&
								matchDetails.params.example === 'validation'
							) {
								return <TypeaheadValidation />;
							}

							return <div>Fake News! No Example Here.</div>;
						},
					}}
				</Outlet>
			</div>
		</div>
	);
});
