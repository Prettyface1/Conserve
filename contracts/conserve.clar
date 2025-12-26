;; Conservation Fund Contract
;; Clarity Version 4

(impl-trait .proposal-trait.proposal-trait)

(define-constant ERR_NOT_AUTHORIZED (err u100))
(define-constant ERR_INVALID_AMOUNT (err u101))

(define-data-var fund-balance uint u0)
