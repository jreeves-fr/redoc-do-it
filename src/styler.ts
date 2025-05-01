import { StyleBuilder } from './utils/style-builder';
import { SwaggerWrapper } from './wrappers/swagger.wrapper';
import { TryBtn } from './elements/try.btn';
import { AuthBtn } from './elements/auth.btn';
import { StyleMatcherConfig } from './config/style-matcher.config';

export class Styler {

    public static cfg:StyleMatcherConfig;

    private static sheet = document.createElement('style');

    private static sheetAddedOnDocument: false;

    private static update(): void {
        if ( !Styler.sheetAddedOnDocument ) {
            document.body.appendChild(Styler.sheet);
        }
        Styler.sheet.innerHTML = StyleBuilder.toString();
    }

    private static authApplies(): void {
        StyleBuilder
            .add(SwaggerWrapper.cfg.shownAuthModalSelector)
                .hidden()
            .style({ height: 'auto', left: 0, top: 0, width: 'auto'})
                .add(SwaggerWrapper.cfg.authorizeModalSelector)
                .hidden()
            .add(SwaggerWrapper.cfg.openModalOverlaySelector)
                .visible()
            .add(SwaggerWrapper.cfg.openAuthorizeModalSelector)
                .visible()
                .style({ width: 'auto', height: 'auto' })

        AuthBtn.$element.addClass(Styler.cfg.authBtnClassesSource);
    }

    private static tryBtnApplies(): void {
        StyleBuilder
            .add(TryBtn.cfg.selector)
                .resetBorder()
                // .cloneBorder(Styler.cfg.$authBtnSource)
                .cloneFont(Styler.cfg.$httpVerbSource)
                .cloneStyles(Styler.cfg.$httpVerbSource, ['padding'])
                // .cloneStyles(Styler.cfg.$authBtnSource, ['color'])
                .style({
                    'border': '1px solid rgb(50,50,159)',
                    // 'background-color': Styler.cfg.defaultBackgroundColor,
                    'background-color': 'rgba(255, 255, 255, 0.9)',
                    'color': 'rgb(50, 50, 159)',
                    'margin-left': '12px',
                    'cursor': 'pointer',
                    'width': '60px',
                    'box-shadow': 'inset 0 0 8px -2px rgb(50, 50, 159)'
                })
            .add(`${TryBtn.cfg.selector}:hover`)
                // .style({'box-shadow': 'inset 0 0 8px -2px rgb(255, 255, 255)', 'font-weight': 700});
                .style({'box-shadow': '0 0 8px -2px white, inset 0 0 8px -2px white', 'font-weight': 500});
    }

    private static inputApplies(): void {
        StyleBuilder
            .add(Styler.cfg.inputTargetSelector)
                .cloneBorder(Styler.cfg.$inputSource)
                .cloneStyles(Styler.cfg.$inputSource, ['color', 'font-size'])
                .style({ 'border-radius': 0 });
    }

    private static modalApplies(): void {

        StyleBuilder
            .add(Styler.cfg.modalHeaderTargetSelector)
                .cloneFont(Styler.cfg.$h2Source)
            .add(Styler.cfg.modalLabelTargetSelector)
                .cloneFont(Styler.cfg.$labelSource)
            .add(Styler.cfg.modalTitleTargetSelector)
                .cloneFont(Styler.cfg.$h3Source)
            .add(Styler.cfg.modalTitleCodeTargetSelector)
                .cloneStyles(Styler.cfg.$labelSource, 'font-size')
            .add(Styler.cfg.modalCodeTargetSelector)
                .cloneFont(Styler.cfg.$h3Source)
                .cloneStyles(Styler.cfg.$alternativeMonospaceFontSource, 'font-family')
            .add(Styler.cfg.modalTargetSelector)
                .style({ 'background-color':'white', 'border-radius': '0'})
            .add(Styler.cfg.modalBtnTargetSelector)
                .cloneStyles(Styler.cfg.$sanSerifFontSource, 'font-family')
                .style({'border-radius': 0})
            .add(Styler.cfg.modalHeaderContainerTargetSelector)
                .style({'border-color': Styler.cfg.defaultBorderColor });

    }

    private static tryItBoxApplies(): void {

        StyleBuilder
            .add(Styler.cfg.operationSectionTargetSelector)
                .hidden()
                .noHeight()
            .add(Styler.cfg.openedOperationSectionSelector)
                .visible()
                .style({ 'height': 'initial' });

        StyleBuilder
            .add(Styler.cfg.openedOperationContainerSelector)
                .style({'display':'block'});

        StyleBuilder
            .add(Styler.cfg.httpVerbSourceSelector)
                .style({ 'border-radius': '4px'});

        StyleBuilder
            .add(Styler.cfg.operationContainerTargetSelector)
                .cloneStyles(Styler.cfg.$dataSectionSource, 'padding')
                .resetBorder()
            .add(Styler.cfg.operationContainerTargetSelector)
                .resetBorder()
                .style({ 'background-color': Styler.cfg.defaultBackgroundColor })
            .add(Styler.cfg.selectTargetSelector)
                .cloneFont(Styler.cfg.$inputSource)
                .resetBorder()
                .cloneStyles(Styler.cfg.$inputSource, [ 'border-width', 'border-style'])
                .absolute()
                .style({
                    'border-width': '1px',
                    'background-color': Styler.cfg.defaultBackgroundColor,
                    'border-style': 'solid',
                    'padding': '0 5px',
                    'margin-top': '-3%',
                    'right': 0,
                    'margin-right': Styler.cfg.$dataSectionSource.css('padding-right')
                })
            .add(Styler.cfg.paragraphTargetSelector)
                .cloneFont(Styler.cfg.$labelSource)
            .add(Styler.cfg.textAreaTargetSelector)
                .resetBorder()
                .cloneFont(Styler.cfg.$alternativeMonospaceFontSource)
                .cloneBorder(Styler.cfg.$codeBoxSource)
                .cloneStyles(Styler.cfg.$codeBoxSource, ['color'])
                .cloneStyles(Styler.cfg.$codeBoxSource, ['background-color'])
            .add(Styler.cfg.descriptionContainerTargetSelector)
                .noPadding()
            .add(Styler.cfg.executeBtnTargetSelector)
                .resetBorder()
                .style({
                    'border': '1px solid rgb(50,50,159)',
                    'color': 'rgb(50, 50, 159)',
                    'font-weight': 400,
                    // 'margin-left': '0.5em',
                    'padding': '0.25em 0.5em',
                    'background-color': Styler.cfg.defaultBackgroundColor })
                // .cloneBorder(Styler.cfg.$authBtnSource)
                // .cloneFont(Styler.cfg.$authBtnSource)
                // .cloneStyles(Styler.cfg.$authBtnSource, ['background-color'])
                .add(`${Styler.cfg.executeBtnTargetSelector}:hover`)
                .resetBorder()
                .style({
                    'border': '1px solid rgb(50,50,159)',
                    'background-color': 'rgb(50, 50, 159)',
                    'font-weight': 400,
                    // 'margin-left': '0.5em',
                    'padding': '0.25em 0.5em',
                    'color': Styler.cfg.defaultBackgroundColor,
                    'box-shadow': '0 5px 15px rgba(50, 50, 159, 0.4)'})
            .add(Styler.cfg.operationHeaderContainerTargetSelector)
                .cloneStyles(Styler.cfg.$h5Source, ['padding', 'margin'])
                .style({ 'box-shadow': 'none' })
            .add(Styler.cfg.operationHeaderTargetSelector)
                .cloneBorder(Styler.cfg.$h5Source)
                .cloneFont(Styler.cfg.$h5Source)
                .cloneStyles(Styler.cfg.$h5Source, 'text-transform')
            .add(Styler.cfg.responseWrapperResultTargetSelector)
                .style({ 'display': 'block'})
            .add(Styler.cfg.responseContainerTargetSelector)
                .style({ 'padding': '0 0 20px 0'})
            .add(Styler.cfg.parametersTableContainerTargetSelector)
                .noPadding()
            .add(Styler.cfg.parameterNameFieldTargetSelector)
                .cloneFont(Styler.cfg.$fieldSource)
                .style({ float: 'right', width: '80px', 'word-wrap':'break-word' })
            .add(Styler.cfg.parameterRequiredTargetSelector)
                .noPadding()
                .cloneFont(Styler.cfg.$requiredFieldSource)
                .style({ 'display':'block', 'padding-top': '4px' })
            .add(Styler.cfg.parameterTypeFieldTargetSelector)
                .cloneFont(Styler.cfg.$typeSource)
                .style({ 'margin-left' : '28px'})
            .add(Styler.cfg.parameterDeprecatedTargetSelector)
                .style({ 'margin-left' : '28px'})
            .add(Styler.cfg.parameterSourceTargetSelector)
                .cloneStyles(Styler.cfg.$alternativeMonospaceFontSource, 'font-family')
                .style({ 'margin-left' : '28px'})
            .add(Styler.cfg.responseHeaderTargetSelector)
                .cloneFont(Styler.cfg.$labelSource)
            .add(Styler.cfg.serverResponseHeaderTargetSelector)
                .cloneFont(Styler.cfg.$labelSource)
            .add(Styler.cfg.serverResponseStatusTargetSelector)
                .style({ 'padding-right': '10px'})
                .cloneFont(Styler.cfg.$typeSource)
            .add(Styler.cfg.serverResponseDescriptionTargetSelector)
                .style({ 'padding-top' : 0 })
            .add(Styler.cfg.serverResponseSubHeaderTargetSelector)
                .cloneFont(Styler.cfg.$labelSource)
            .add(Styler.cfg.responseMicrolightTargetSelector)
                //.cloneFont(Styler.cfg.$codeSource, true)
                .cloneStyles(Styler.cfg.$codeBoxSource, 'background-color', true)
                .resetBorder()
                //TODO: Change colors based on theme
                .style({'color': 'white'})
            .add(Styler.cfg.responseCodeTargetSelector)
                .cloneFont(Styler.cfg.$codeSource, true)
                .cloneStyles(Styler.cfg.$codeBoxSource, 'background-color', true)
                .resetBorder()
                .style({'color': 'white'})
            .add(`${Styler.cfg.responseClipboardBtnTargetSelector}:before`)
                .cloneFont(Styler.cfg.$btnSource)
                // .style({ 'content': '"Copy"', 'display': 'block', 'margin': '0 4px 4px 0', 'padding': '4px 8px', 'background-color': 'rgba(255, 255, 255, 0.1)'})
                // .style({ 'content': '"Copy"', 'display': 'block'})
                .style({ 'content': '"Copy"', 'display': 'block', 'padding': '2px 8px 2px 8px', 'color':'rgba(255,255,255,0.7)'})
            .add(`${Styler.cfg.responseClipboardBtnTargetSelector}:hover:before`)
                .cloneFont(Styler.cfg.$btnSource)
                .style({ 'content': '"Copy"', 'display': 'block', 'padding': '2px 8px 2px 8px', 'color':'white', 'background-color': 'rgba(255, 255, 255, 0.1)', 'transition':'0.4s'})
            .add(Styler.cfg.responseClipboardTargetSelector)
                .noPadding()
                .cloneBorder(Styler.cfg.$btnSource)
                .style({ 'background' : 'none', 'width': '48px'})
            .add(Styler.cfg.responseClipboardBtnTargetSelector)
                .noPadding()
                .cloneBorder(Styler.cfg.$btnSource)
                .style({ 'background-image': 'none', 'height': '30px'})
            .add(Styler.cfg.responseCurlClipboardTargetSelector)
                .style({ 'right': '10px', 'bottom': '18px'})
            .add(Styler.cfg.responseDownloadTargetSelector)
                .cloneFont(Styler.cfg.$btnSource)
                // .cloneBorder(Styler.cfg.$btnSource)
                .resetBorder()
                .style({ 'height':'25px', 'padding': '2px 8px 2px 8px', 'background' : 'none', 'color':'rgba(255,255,255,0.7)'})
            .add(`${Styler.cfg.responseDownloadTargetSelector}:hover`)
                .style({ 'color':'white', 'background-color': 'rgba(255, 255, 255, 0.1)', 'transition':'0.4s'});
        TryBtn.$btn.on('click', Styler.createStyleElements);
    }

    private static themeMatchApplies(): void {
        Styler.inputApplies();
        Styler.modalApplies();
        Styler.tryItBoxApplies();
    }

    private static hideDisturbingElements(): void {
        StyleBuilder
            .add(Styler.cfg.operationTryOutTargetSelector)
                .noDisplay()
            .add(Styler.cfg.responseTableTargetSelector)
                .noDisplay()
            .add(Styler.cfg.responseWrapperTargetSelector)
                .noDisplay()
            .add(Styler.cfg.responseTitleTargetSelector)
                .noDisplay()
            .add(Styler.cfg.operationHeaderDecorationTargetSelector)
                .noDisplay()
            .add(Styler.cfg.parameterRequiredMarkerTargetSelector)
                .noDisplay()
            .add(Styler.cfg.summaryTargetSelector)
                .noDisplay()
            .add(Styler.cfg.clearBtnTargetSelector)
                .noDisplay()
            .add(Styler.cfg.parametersHeadTargetSelector)
                .noDisplay()
            .add(Styler.cfg.operationTagTargetSelector)
                .noDisplay()
            .add(Styler.cfg.operationContainerTargetSelector)
                .noDisplay()
            .add(Styler.cfg.openedInformationContainerTargetSelector)
                .noDisplay()
            .add(Styler.cfg.openedAuthWrapperTargetSelector)
                .noDisplay()
            .add(Styler.cfg.openedSchemeContainerTargetSelector)
                .noDisplay()
            .add(Styler.cfg.openedModelsContainerTargetSelector)
                .noDisplay();
    }

    public static createStyleElements(): void {
        setTimeout(function () {
            const marker = Styler.cfg.$fieldMarkerSource.clone();
            marker.css('float', 'left');
            marker.insertBefore(`${Styler.cfg.parameterNameFieldTargetSelector}:first-child`);
        }, 100)
        TryBtn.$selected.off('click', Styler.createStyleElements);
    }

    public static init(): void {
        Styler.hideDisturbingElements();
        Styler.authApplies();
        Styler.tryBtnApplies();
        Styler.themeMatchApplies();
        Styler.update();
    }

    public static initSwaggerWrapper(): void {
        StyleBuilder
            .add('body')
                .relative()
            .add(SwaggerWrapper.cfg.wrapperSelector)
                .noPadding()
            .add(SwaggerWrapper.cfg.boxSelector)
                .relative()
                .noTop()
                .noLeft()
                .noOverflow()
                .resetBorder()
                .style({'border-radius':'4px', 'background-color': '#ffff', width: '100%', height: '100vh', 'z-index': 1})
            .add(SwaggerWrapper.cfg.hiddenSelector)
                .hidden()
                .noWidth()
                .noHeight()
                .noCursor()
            .add(SwaggerWrapper.cfg.shownSelector)
                .visible()
                .style({ cursor: 'initial',  width: 'auto', height: 'auto'});

        Styler.update();
    }
}
