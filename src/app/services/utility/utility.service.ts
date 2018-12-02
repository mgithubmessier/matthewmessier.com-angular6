export class UtilityService {
    hasParent(element: Element, comparator: Element) {
        do {
            if(element.parentElement === comparator) {
                return true;
            } 
            element = element.parentElement;
        } while(element && element.parentElement);
    }
}